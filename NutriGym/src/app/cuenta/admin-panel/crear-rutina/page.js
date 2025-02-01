"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import BotonesMultiples from "../../../../components/account/adminPanel/botonesMultiples";
import { FileText} from 'lucide-react'
import { useMetaDataContext } from "@/components/layout/metaDataContext";

export default function CreateRutinaPage() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [ejercicios, setEjercicios] = useState([]);
  const [idRutina, setIdRutina] = useState(null);
  const [todosEjercicios, setTodosEjercicios] = useState([]);
  const [creatingRutina, setCreatingRutina] = useState(false);
  const [rutinaCreated, setRutinaCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { setTitle, setName, setContent } = useMetaDataContext();
        
  useEffect (() => {
    setTitle("Crear Rutina");
    setName("description");
    setContent("Crea una nueva rutina.");
  }, []);
  
  const handleEjercicios = (idsSelecccionados) => {
    obtainEjercicios();
  }

  const handleModal = () => {
    handleEjercicios();
    document.getElementById('my_modal_4').showModal();
  }

  const obtainEjercicios = async () => {
    try {
      const response = await fetch(`http://localhost:3001/ejercicios/obtener-todos`);
      
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
  
      const data = await response.json();
      
      setTodosEjercicios(data);
    } catch (error) {
      console.error("Error al obtener los ejercicios:", error);
      setErrorMessage("Error al obtener datos de los ejercicios.");
    }
  };

  const guardarSeleccion = (selecciones) => {
    setEjercicios(selecciones);
  };

  useEffect(() => {
    if (idRutina && ejercicios.length > 0) {
      for (let i = 0; i < ejercicios.length; i++) {
        crearRelacion(idRutina, ejercicios[i]);
      }
    }
  }, [idRutina, ejercicios]);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingRutina(true);
    setErrorMessage('');
    setRutinaCreated(false);
  
    // Creación de la fila en Rutinas
    const response = await fetch(`http://localhost:3001/rutinas/crear`, {
      method: 'POST',
      body: JSON.stringify({ nombre, descripcion }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      const data = await response.json();
      setRutinaCreated(true);
      setIdRutina(data.id);
      setCreatingRutina(false);
      
    } else {
      const errorData = await response.json();
      setErrorMessage(
        errorData.errores?.map((e) => e.msg).join(', ') || 'Error al crear una rutina'
      );
      setCreatingRutina(false);
    }
  }
  
  async function crearRelacion(idRutina, idEjercicio) {
    try {
      const response = await fetch(`http://localhost:3001/rutinas-tiene-ejercicios/crear`, {
        method: 'POST',
        body: JSON.stringify({ idRutina, idEjercicio }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(
          errorData.errores?.map((e) => e.msg).join(', ') || 'Error al crear las asociaciones de la rutina'
        );
      } else {
        const data = await response.json();
      }
    } catch (error) {
      console.error('Error al crear la relación:', error);
    }
  }
  

  return (
    <main>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-2">Crear rutinas</h1>
          <p className="text-center text-gray-600 mb-6">Crea una rutina</p>

          {rutinaCreated && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
              La rutina ha sido creada. Verificalo en el <Link href="/account/adminPanel" className="font-medium underline">panel de administrador</Link>.
            </div>
          )}
          {errorMessage && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(ev) => setNombre(ev.target.value)}
                disabled={creatingRutina}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>
            
            <div className="flex flex-col my-3 space-y-2">
              <label htmlFor="textarea" className="text-gray-600">
                Escribe una descripción:
              </label>
              <textarea
                id="textarea"
                value={descripcion}
                onChange={(ev) => setDescripcion(ev.target.value)}
                placeholder="Escribe aquí..."
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
              <p className="text-sm text-gray-500">
                Caracteres: {descripcion.length}
              </p>
            </div>
            
            <div>
              <button 
                type="button"
                onClick={() => handleModal()}
                disabled={creatingRutina}
                title="Elegir ejercicios"
                className='w-full shadow-md py-2 bg-[#52BCE8] rounded-md text-white hover:bg-[#52ACD8]'
              >
                <FileText size={20} className='inline-block'/>Elegir ejercicios
              </button>
              <div className="w-[100%]">
                <dialog id="my_modal_4" className="modal w-[45%] p-10 rounded-md">
                  <div className="modal-box m-auto w-14/15 max-w-full">
                    <h3 className="text-3xl font-bold mb-2">Ejercicios</h3>
                    <p className="pt-2 pb-1 text-gray-600">Selecciona los ejercicios pertenecientes a la rutina:</p>

                    <BotonesMultiples elementos={todosEjercicios} defaultIds={[]} tipoElementos={'Ejercicios'} onEjerciciosSelected={handleEjercicios} onGuardar={guardarSeleccion}/>
                  </div>
                </dialog>
              </div>
            </div>

            <div className="w-[100%] py-2">
              <div className="w-[90%] justify-center h-[2px] bg-[#D2D2D255] mx-auto"></div>
            </div>

            <button
              type="submit"
              disabled={creatingRutina}
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {creatingRutina ? 'Creando...' : 'Crear'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}