"use client";

import { useState, useEffect } from "react";
import { Frown } from "lucide-react";
import { useSession } from 'next-auth/react'
import SearchBar from "../../../components/account/adminPanel/searchBar"
import ElementCard from "../../../components/account/adminPanel/elementCard"
import AddElementButton from "../../../components/account/adminPanel/addElementButton"
import Options from "../../../components/account/adminPanel/Options"
import { useStateContext } from "@/components/stateContext";
import UserBanner from "@/components/UserBanner";
import { useMetaDataContext } from "@/components/layout/metaDataContext";

export default function AdminPage() {
    const { data: session, status } = useSession();
    const { sharedOpcion } = useStateContext();
    const routes = {
        "Usuarios": "usuarios",
        "Rutinas": "rutinas",
        "Planes Alimenticios": "planes-alimenticios",
        "Ejercicios": "ejercicios",
        "Platillos": "platillos"
    };
    const { setTitle, setName, setContent } = useMetaDataContext();

    const [urlBusqueda, setUrlBusqueda] = useState(routes[sharedOpcion]);
    const [elementos, setElementos] = useState(null);
    const [searching, setSearching] = useState(true);
    const [isAdmin, setAdmin] = useState(false)

    useEffect (() => {
        setTitle("Panel de Administrador");
        setName("description");
        setContent("Administra los datos de las entidades.");
    }, []);
      
    useEffect(() => {
        if (session?.user?.rol === 1) {
            setAdmin(true)
        }
    }, [session])
    

    const obtenerTodos = async (busqueda) => {
        try {
            const response = await fetch(`http://localhost:3001/${urlBusqueda}/obtener-todos`);
            
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }

            const data = await response.json();

            setElementos(data);
        } catch (error) {
            console.error("Error al buscar:", error);
        }
    };

    const handleSearch = async (busqueda) => {
        try {
            const response = await fetch(`http://localhost:3001/${urlBusqueda}/obtener-todos-por-nombre-con-palabra/${busqueda}`);
            console.log(`http://localhost:3001/${urlBusqueda}/obtener-todos-por-nombre-con-palabra/${busqueda}`)

            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }

            const data = await response.json();

            setElementos(data);
        } catch (error) {
            console.error("Error al buscar:", error);
        }
    };

    const handleEliminarElemento = () => {
        obtenerTodos();
    };

    useEffect(() => {
        obtenerTodos();
    }, [urlBusqueda]);

    useEffect(() => {
        setUrlBusqueda(routes[sharedOpcion]);
    }, [sharedOpcion])

    return (
        <div className="min-h-screen flex bg-gray-100">
            {status === 'authenticated' && isAdmin && (
                <>
                    <aside className="w-full hidden md:block md:w-64 flex flex-shrink-0 bg-white shadow-lg">
                        <UserBanner/>
                        <Options/>
                    </aside>
                    <main className="w-full">
                        <div className="min-h-screen flex w-full">
                            <div className="flex-grow px-6 py-8 md:px-24">
                                <div className="flex justify-between">
                                <h1 className="text-4xl font-bold mb-3">{sharedOpcion}</h1>
                                <AddElementButton opcion={sharedOpcion}/>
                            </div>
                            
                                    
                            <SearchBar onSearch={handleSearch} />

                            {!searching && (
                                <>
                                    
                                    <h3 className="text-xl pl-2 pb-6">Resultado de la búsqueda...</h3>

                                    {elementos === null && <h3 className="text-xl pl-2">No hay elementos por mostrar...</h3>}

                                    {elementos !== null && (
                                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                                            {elementos.map((elemento, index) => (
                                                <ElementCard key={index} elemento={elemento} index={index} tipoElemento={sharedOpcion} urlBusqueda={urlBusqueda}/>
                                            ))}
                                        </div>
                                    )}    
                                </>
                            )}

                            {searching && (
                                <>
                                    {elementos === null && <h3 className="text-xl pl-2">No hay elementos por mostrar...</h3>}

                                    {elementos !== null && (
                                        <>
                                            <h3 className="text-xl pl-2 pb-6">Resultado de la búsqueda...</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
                                                {elementos.map((elemento, index) => (
                                                    <ElementCard key={index} elemento={elemento} index={index} tipoElemento={sharedOpcion} urlBusqueda={urlBusqueda} onEliminar={handleEliminarElemento}/>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                    </main>
                </>
            )}

            {(status === 'unauthenticated' || !isAdmin) && (
                <main>
                    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 text-center gap-[25px] px-6 lg:px-40 lg:px-84">
                        <Frown size={128} strokeWidth={1.25} className="mb-4" />
                        <h2 className="text-[24px] font-bold md:text-left">Necesitas una cuenta de administrador para acceder a esta página.</h2>
                    </div>
                </main>              
            )}
        </div>
    );
}
