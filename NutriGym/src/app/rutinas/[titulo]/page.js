'use client'

import { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, DumbbellIcon, CalendarIcon, ClockIcon } from 'lucide-react'
import { useMetaDataContext } from '@/components/layout/metaDataContext'

const VerRutina = ({ params }) => {
  const { titulo } = params
  const [rutina, setRutina] = useState(null)
  const [ejercicios, setEjercicios] = useState([])
  const [diaActual, setDiaActual] = useState(0)

  const { setTitle, setName, setContent } = useMetaDataContext();
        
  useEffect (() => {
    setTitle("Ejercicios");
    setName("description");
    setContent("Ejercicios de la rutina seleccionada.");
  }, []);

  useEffect(() => {
    const fetchRutina = async () => {
      try {
        const response = await fetch(`http://localhost:3001/rutinas/obtener-por-nombre/${titulo}`)
        const data = await response.json();

        setRutina(data)
      } catch (error) {
        console.error('Error al obtener la rutina:', error);
      }
    }
    fetchRutina();
  }, [titulo])

  const idRutina = rutina?.id;

  useEffect(() => {
    const fetchEjercicios = async () => {
      try {
        const response = await fetch(`http://localhost:3001/rutinas-tiene-ejercicios/obtener-todos-ejercicios-por-id-rutina/${idRutina}`)
        const dataEjercicios = await response.json();

        setEjercicios(dataEjercicios);
      } catch (error) {
        console.error('Error al obtener los ejercicios:', error);
      }
    }
    if (idRutina) {
      fetchEjercicios();
    }
  }, [idRutina])

  const agruparPorDivision = (ejercicios) => {
    const grupos = { Pull: [], Push: [], Legs: [] };

    ejercicios.forEach(ejercicio => {
      const division = ejercicio.divisionRutina;

      if (grupos[division]) {
        grupos[division].push(ejercicio);
      }
    })
    return grupos;
  }

  const gruposEjercicios = agruparPorDivision(ejercicios)
  const diasRutina = Object.keys(gruposEjercicios)

  const siguienteDia = () => setDiaActual((prev) => (prev + 1) % diasRutina.length);
  const diaAnterior = () => setDiaActual((prev) => (prev - 1 + diasRutina.length) % diasRutina.length);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
          <h1 className="text-3xl font-extrabold text-white text-center">
            {rutina?.nombre || 'Cargando rutina...'}
          </h1>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={diaAnterior}
              className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-semibold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out"
            >
              <ChevronLeftIcon className="h-5 w-5 mr-2" />
              Anterior
            </button>
            <h2 className="text-2xl font-bold text-gray-800">{diasRutina[diaActual]}</h2>
            <button
              onClick={siguienteDia}
              className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-semibold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out"
            >
              Siguiente
              <ChevronRightIcon className="h-5 w-5 ml-2" />
            </button>
          </div>
          <div className="space-y-6">
            {gruposEjercicios[diasRutina[diaActual]]?.map((ejercicio) => (
              <div key={ejercicio.id} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{ejercicio.nombre}</h3>
                <p className="text-gray-600 mb-4">{ejercicio.descripcion}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-flex items-center">
                    <DumbbellIcon className="h-4 w-4 mr-1" />
                    {ejercicio.cantidadSeriesRecomendadas} series
                  </span>
                  {ejercicio.cantidadRepeticionesRecomendadas && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {ejercicio.cantidadRepeticionesRecomendadas} repeticiones
                    </span>
                  )}
                  {ejercicio.duracion && (
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full inline-flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {ejercicio.duracion}
                    </span>
                  )}
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    {ejercicio.musculoAfectado}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerRutina