"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";
import BotonesMultiples from "../../../../../components/account/adminPanel/botonesMultiples";
import { FileText } from 'lucide-react'
import { useMetaDataContext } from "@/components/layout/metaDataContext";

export default function EditPlanAlimenticioPage() {
  const router = useRouter()

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [idPlan, setIdPlan] = useState(null);
  const [platillos, setPlatillos] = useState([]);
  const [defaultIds, setDefaultIds] = useState([]);
  const [todasRelaciones, setTodasRelaciones] = useState([]);
  const [todosPlatillos, setTodosPlatillos] = useState([]);
  const [updatingPlan, setUpdatingPlan] = useState(false);
  const [planUpdated, setPlanUpdated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { setTitle, setName, setContent } = useMetaDataContext();
        
  useEffect (() => {
    setTitle("Editar Plan Alimenticio");
    setName("description");
    setContent("Edita un plan alimenticio.");
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullUrl = window.location.href;
      const segments = fullUrl.split('/');
      const id = segments[segments.length - 1];

      setIdPlan(id);
    }
  }, [router]);

  useEffect(() => {
    if (idPlan) {
      obtainRutina();
    }
  }, [idPlan]);

  useEffect(() => {
    if (platillos.length > 0) {
      setDefaultIds(platillos);
    }
  }, [platillos]);





  useEffect(() => {
    if (idPlan && todasRelaciones && platillos.length > 0) {
      eliminarRelaciones();

      for (let i = 0; i < platillos.length; i++) {
        crearRelacion(idPlan, platillos[i]);
      }
    }
  }, [todasRelaciones, idPlan, platillos]);

  const obtainRutina = async () => {
    try {
      if (idPlan) {
        const responsePlanAlimenticio = await fetch(`http://localhost:3001/planes-alimenticios/obtener-por-id/${idPlan}`);
      
      
        if (!responsePlanAlimenticio.ok) {
          throw new Error('Error en la respuesta de la API en el plan alimenticio.');
        }
    
        const dataPlanAlimenticio = await responsePlanAlimenticio.json();

        setNombre(dataPlanAlimenticio.nombre);
        setDescripcion(dataPlanAlimenticio.descripcion);


        const responsePlatillos = await fetch(`http://localhost:3001/planes-alimenticios-tiene-platillos/obtener-todos-platillos-por-id-plan-alimenticio/${idPlan}`);
        
        if (!responsePlatillos.ok) {
          throw new Error('Error en la respuesta de la API en las asociaciones.');
        }
    
        const dataPlatillos = await responsePlatillos.json();
        

        setPlatillos(pasarAid (dataPlatillos));
      }
      
    } catch (error) {
      console.error("Error al obtener el plan alimenticio:", error);
      setErrorMessage("Error al obtener datos del plan alimenticio.");
    }
  };


  const handleModal = () => {
    handlePlatillos();
    document.getElementById('my_modal_4').showModal();
  }
  
  
  const handlePlatillos = (idsSelecccionados) => {
    obtainPlatillos();
  }


  const guardarSeleccion = (selecciones) => {
    setPlatillos(selecciones);
  };


  function pasarAid(ejer) {
    return ejer.map((e) => e.id);
  }  


  async function eliminarRelaciones () {
    for (let i = 0 ; i < todasRelaciones.length ; i++) {
      const responseDelete = await fetch (`http://localhost:3001/planes-alimenticios-tiene-platillos/eliminar/${todasRelaciones[i].id}`, {
        method: 'DELETE',
      });

      if (responseDelete.ok) {
        console.log('Relaciones eliminadas.');
      }
    }
  }


  const obtainPlatillos = async () => {
    try {
      const response = await fetch(`http://localhost:3001/platillos/obtener-todos`);
      
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
  
      const data = await response.json();
      
      setTodosPlatillos(data);
    } catch (error) {
      console.error("Error al obtener los platillos:", error);
      setErrorMessage("Error al obtener datos de los platillos.");
    }
  };
  

  async function crearRelacion(idPlanAlimenticio, idPlatillo) {
    try {
      const response = await fetch(`http://localhost:3001/planes-alimenticios-tiene-platillos/crear`, {
        method: 'POST',
        body: JSON.stringify({ idPlanAlimenticio, idPlatillo }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(
          errorData.errores?.map((e) => e.msg).join(', ') || 'Error al actualizar las asociaciones de la rutina'
        );
      }
    } catch (error) {
      console.error('Error al actualizar la relación:', error);
    }
  }
  

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setUpdatingPlan(true);
    setErrorMessage('');
    setPlanUpdated(false);
  
    // Creación de la fila en Rutinas
    const response = await fetch(`http://localhost:3001/planes-alimenticios/actualizar/${idPlan}`, {
      method: 'PUT',
      body: JSON.stringify({ nombre, descripcion }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      setPlanUpdated(true);
      setUpdatingPlan(false);
  
      const responseTodasRelaciones = await fetch (`http://localhost:3001/planes-alimenticios-tiene-platillos/obtener-todos-por-id-plan-alimenticio/${idPlan}`);

      const todasRelaciones = await responseTodasRelaciones.json();
      
      setTodasRelaciones(todasRelaciones);
    } else {
      const errorData = await response.json();
      setErrorMessage(
        errorData.errores?.map((e) => e.msg).join(', ') || 'Error al actualizar el plan alimenticio.'
      );
      setUpdatingPlan(false);
    }
  }


  return (
    <main>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-2">Editar Plan Alimenticio</h1>
          <p className="text-center text-gray-600 mb-6">Actualiza un plan alimenticio</p>

          {planUpdated && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
              El plan alimentiico ha sido modificado. Verificalo en el <Link href="/account/adminPanel" className="font-medium underline">panel de administrador</Link>.
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
                disabled={updatingPlan}
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
                disabled={updatingPlan}
                title="Elegir ejercicios"
                className='w-full shadow-md py-2 bg-[#52BCE8] rounded-md text-white hover:bg-[#52ACD8]'
              >
                <FileText size={20} className='inline-block'/>Elegir platillos
              </button>
              <div className="w-[100%]">
                <dialog id="my_modal_4" className="modal w-[45%] p-10 rounded-md">
                  <div className="modal-box m-auto w-14/15 max-w-full">
                    <h3 className="text-3xl font-bold mb-2">Platillos</h3>
                    <p className="pt-2 pb-1 text-gray-600">Selecciona los platillos pertenecientes al plan alimenticio:</p>

                    <BotonesMultiples elementos={todosPlatillos} defaultIds={defaultIds} tipoElementos={'Platillos'} onEjerciciosSelected={handlePlatillos} onGuardar={guardarSeleccion}/>
                  </div>
                </dialog>
              </div>
            </div>

            <div className="w-[100%] py-2">
              <div className="w-[90%] justify-center h-[2px] bg-[#D2D2D255] mx-auto"></div>
            </div>

            <button
              type="submit"
              disabled={updatingPlan}
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {updatingPlan ? 'Actualizando...' : 'Actualizar'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}