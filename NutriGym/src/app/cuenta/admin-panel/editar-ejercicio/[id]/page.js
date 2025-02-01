"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import Link from "next/link";
import { useMetaDataContext } from "@/components/layout/metaDataContext";

export default function EditEjercicioPage() {
  const router = useRouter();

  const [ idEjercicio, setIdEjercicio ] = useState (null);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [link, setLink] = useState(null);
  const [duracion, setDuracion] = useState(null);
  const [cantidadRepeticionesRecomendadas, setRepeticiones] = useState(null);
  const [cantidadSeriesRecomendadas, setSeries] = useState(null);
  const [musculoAfectado, setMusculoAfectado] = useState('');
  const [divisionRutina, setDivRutina] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [editingEjercicio, setEditingEjercicio] = useState(false);
  const [ejercicioEdited, setEjercicioEdited] = useState(false);

  const { setTitle, setName, setContent } = useMetaDataContext();
        
  useEffect (() => {
    setTitle("Editar Ejericico");
    setName("description");
    setContent("Edita un ejercicio.");
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullUrl = window.location.href;
      const segments = fullUrl.split('/');
      const id = segments[segments.length - 1];

      setIdEjercicio(id);
    }
  }, [router]);

  useEffect(() => {
    if (!duracion && !cantidadRepeticionesRecomendadas) {
      setErrorMessage('Debe ingresar al menos una duración o una cantidad de repeticiones.');
    } else {
      setErrorMessage('');
    }
  }, [duracion, cantidadRepeticionesRecomendadas]);

  useEffect(() => {
    if (idEjercicio) {
      obtainEjercicio();
    }
  }, [idEjercicio]);

  const obtainEjercicio = async () => {
    try {
      if (idEjercicio) {
        const response = await fetch(`http://localhost:3001/ejercicios/obtener-por-id/${idEjercicio}`);
      
      
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API en el ejercicio.');
        }
    
        const data = await response.json();

        setNombre(data.nombre);
        setDescripcion(data.descripcion);
        setLink(data.link);
        setDivRutina(data.divisionRutina);
        setMusculoAfectado(data.musculoAfectado);
        setSeries(data.cantidadSeriesRecomendadas);
        setRepeticiones(data.cantidadRepeticionesRecomendadas);
        setDuracion(data.duracion);
      }
      
    } catch (error) {
      console.error("Error al obtener el ejercicio:", error);
      setErrorMessage("Error al obtener datos del ejercicio.");
    }
  };

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setEditingEjercicio(true);
    setErrorMessage('');
    setEjercicioEdited(false);

    // Validación: uno u otro, pero no ambos
    if ((duracion && cantidadRepeticionesRecomendadas) || (!duracion && !cantidadRepeticionesRecomendadas)) {
      setErrorMessage(
        'Debe ingresar solo una duración o una cantidad de repeticiones, no ambos.'
      );
      setEditingEjercicio(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/ejercicios/actualizar/${idEjercicio}`, {
        method: 'PUT',
        body: JSON.stringify({
          nombre,
          descripcion,
          link,
          duracion: duracion || null,
          cantidadRepeticionesRecomendadas: cantidadRepeticionesRecomendadas || null,
          cantidadSeriesRecomendadas,
          musculoAfectado,
          divisionRutina,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setEjercicioEdited(true);
        setEditingEjercicio(false);
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.errores?.map((e) => e.msg).join(', ') || 'Error al editar el ejercicio.'
        );
        setEditingEjercicio(false);
      }
    } catch (error) {
      setErrorMessage('Error al conectar con el servidor.');
      setEditingEjercicio(false);
    }
  }

  return (
    <main>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 px-12 rounded-lg shadow-md w-full max-w-4xl">
          <h1 className="text-2xl font-bold text-center mb-2">Editar ejercicio</h1>
          <p className="text-center text-gray-600 mb-6">Edita el ejercicio "{nombre}"</p>

          {ejercicioEdited && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
              El ejercicio ha sido creada. Verificalo en el <Link href="/account/adminPanel" className="font-medium underline">panel de administrador</Link>.
            </div>
          )}
          {errorMessage && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-4 flex flex-col items-center justify-center">
            <div className="w-full">
              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(ev) => setNombre(ev.target.value)}
                disabled={editingEjercicio}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>

            <div onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Musculo Afectado"
                    value={musculoAfectado}
                    onChange={(ev) => setMusculoAfectado(ev.target.value)}
                    disabled={editingEjercicio}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Tipo de ejercicio"
                    value={divisionRutina}
                    onChange={(ev) => setDivRutina(ev.target.value)}
                    disabled={editingEjercicio}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                  />
                </div>
                            
                <div>
                  <input
                    type="number"
                    placeholder="Cantidad de series recomendadas"
                    value={cantidadSeriesRecomendadas}
                    onChange={(ev) => setSeries(ev.target.value)}
                    disabled={editingEjercicio}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                  />
                </div>

                <div>
                  <input
                    type="number"
                    placeholder="Cantidad de repeticiones recomendadas"
                    value={cantidadRepeticionesRecomendadas}
                    onChange={(ev) => setRepeticiones(ev.target.value)}
                    disabled={editingEjercicio}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="textarea" className="text-gray-600">
                    Escribe una descripción:
                  </label>
                  <textarea
                    id="textarea"
                    value={descripcion}
                    onChange={(ev) => setDescripcion(ev.target.value)}
                    placeholder="Escribe aquí..."
                    className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                  />
                  <p className="text-sm text-gray-500">
                    Caracteres: {descripcion.length}
                  </p>
                </div>

                <div className="flex justify-center items-center gap-2 ">
                  <input
                    type="number"
                    placeholder="Duración"
                    value={duracion}
                    onChange={(ev) => setDuracion(ev.target.value)}
                    disabled={editingEjercicio}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 inline-block"
                  />
                  <p className="text-gray-500">
                    segundos
                  </p>
                </div>    
              </div>
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder="Link"
                value={link}
                onChange={(ev) => setLink(ev.target.value)}
                disabled={editingEjercicio}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>

            <div className="w-[100%] py-2">
              <div className="w-[90%] justify-center h-[2px] bg-[#D2D2D255] mx-auto"></div>
            </div>

            <button
              type="submit"
              disabled={editingEjercicio}
              className="w-1/2 bg-black text-white py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {editingEjercicio ? 'Editando...' : 'Editar'}
            </button>
          </form>    
        </div>
      </div>
    </main>
  );
}