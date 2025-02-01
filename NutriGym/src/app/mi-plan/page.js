"use client"

import { useState, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FileText, Plus } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import { useMetaDataContext } from '@/components/layout/metaDataContext';

export default function MiPlan() {
    const { data: session, status } = useSession();
    const [pdfBlob, setPdfBlob] = useState(null);
    const [pdfPreview, setPdfPreview] = useState(null);
    const [rutinaPdf, setRutinaPdf] = useState(null);
    const [idRutinaPdf, setIdRutinaPdf] = useState(null);
    const router = useRouter();

    const { setTitle, setName, setContent } = useMetaDataContext();
            
    useEffect (() => {
        setTitle("Mi Plan");
        setName("description");
        setContent("Descarga en formato PDF tu rutina.");
    }, []);

    useEffect(() => {
        // Configurar worker de PDF.js
        pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
    }, []);

    useEffect( () => {
        if (status === 'authenticated') {
            const obtainUser = async () => {
                try {
                    const response = await fetch(`http://localhost:3001/usuarios/obtener-por-id/${session.user.id}`);
                
                    if (!response.ok) {
                        throw new Error('Error en la respuesta de la API');
                    }
                
                    const data = await response.json();

                    setIdRutinaPdf(data.usuario.idRutinaPdf);
                } catch (error) {
                    console.error("Error al obtener usuario:", error);
                    setErrorMessage("Error al obtener datos del usuario.");
                }
            }
            
            
            obtainUser();
        };
    }, [status, session]);

    useEffect(() => {
        if (status === 'authenticated') {
            const fetchPdf = async () => {
                try {
                    const response = await fetch(`http://localhost:3001/rutinas-pdf/obtener-por-id/${idRutinaPdf}`);
                    if (!response.ok) {
                        throw new Error('Error en la respuesta de la API');
                    }

                    const data = await response.json();
                    setRutinaPdf(data);
                    
                    // Convertir base64 a blob
                    const base64Response = await fetch(data.pdf);
                    const blob = await base64Response.blob();
                    setPdfBlob(blob);

                    // Generar preview de la primera página
                    const arrayBuffer = await blob.arrayBuffer();
                    const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
                    const page = await pdf.getPage(1);
                    const viewport = page.getViewport({ scale: 1.5 });

                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    await page.render({
                        canvasContext: context,
                        viewport: viewport
                    }).promise;

                    setPdfPreview(canvas.toDataURL());

                    // Actualizar la sesión después de obtener el PDF
                    await signIn('credentials', { redirect: false });
                } catch (error) {
                    console.error("Error al obtener el PDF:", error);
                }
            };
            fetchPdf();
        }
    }, [idRutinaPdf]);

    if (status === 'authenticated') {
        return (
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Bienvenido a tu plan personalizado, {session.user.nombre}
                        </h1>
                        <p className="mt-2 text-gray-600">
                            Aquí podrás ver tu rutina personalizada
                        </p>
                    </div>

                    {pdfBlob ? (
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="p-4 bg-gray-50 border-b">
                                <div className="flex items-center">
                                    <FileText className="text-[#F42F00] mr-2" />
                                    <h2 className="text-xl font-semibold">Tu Plan de Entrenamiento</h2>
                                </div>
                            </div>
                            <div className="p-4">
                                {pdfPreview && (
                                    <div className="mb-4">
                                        <img 
                                            src={pdfPreview} 
                                            alt="Vista previa del PDF" 
                                            className="max-w-full h-auto mx-auto"
                                        />
                                        <a 
                                            href={pdfPreview} 
                                            download={`${rutinaPdf.nombre || "vista-previa"}.png`}
                                            className="inline-flex items-center px-4 py-2 bg-[#F42F00] text-white rounded-md hover:bg-[#D42800] transition-colors mt-2"
                                        >
                                            Descargar Vista Previa
                                        </a>
                                    </div>
                                )}
                                <object 
                                    data={URL.createObjectURL(pdfBlob)} 
                                    type="application/pdf" 
                                    className="w-full h-[800px]"
                                >
                                    <div className="p-4 text-center">
                                        <p className="text-gray-600 mb-4">Tu navegador no soporta PDFs.</p>
                                        <a 
                                            href={URL.createObjectURL(pdfBlob)}
                                            className="inline-flex items-center px-4 py-2 bg-[#F42F00] text-white rounded-md hover:bg-[#D42800] transition-colors"
                                            download={rutinaPdf.nombre || "mi-plan.pdf"}
                                        >
                                            Descargar PDF
                                        </a>
                                    </div>
                                </object>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                            <div className="mb-6">
                                <div className="mx-auto w-16 h-16 bg-[#F42F00] rounded-full flex items-center justify-center">
                                    <Plus className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h2 className="text-2xl font-semibold mb-4">No tienes un plan activo</h2>
                            <p className="text-gray-600 mb-6">
                                Comienza creando tu plan personalizado ahora mismo
                            </p>
                            <button
                                onClick={() => router.push('/crear-plan')}
                                className="inline-flex items-center px-6 py-3 bg-[#F42F00] text-white rounded-md hover:bg-[#D42800] transition-colors"
                            >
                                Crear Mi Plan
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Accede a tu Plan Personalizado
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Registrate para ver y gestionar tu plan de entrenamiento
                    </p>
                    <button
                        onClick={() => router.push('/account')}
                        className="w-full px-6 py-3 bg-[#F42F00] text-white rounded-md hover:bg-[#D42800] transition-colors"
                    >
                        Registrarse
                    </button>
                </div>
            </div>
        );
    }
}
