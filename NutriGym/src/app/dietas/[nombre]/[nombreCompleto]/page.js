"use client"

import { useState, useEffect } from 'react'
import { useRouter } from "next/navigation"
import React from 'react';
import { useMetaDataContext } from '@/components/layout/metaDataContext';

export default function Component() {
  const router = useRouter();
  const [nombreDieta, setNombreDieta] = useState('');
  const [dieta, setDieta] = useState(null);
  const [platillos, setPlatillos] = useState([]);

  const { setTitle, setName, setContent } = useMetaDataContext();
        
  useEffect (() => {
    setTitle("Menú Semanal");
    setName("description");
    setContent("Menú semanal con alimentos recomendados para cada momento del día.");
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullUrl = window.location.href;
      const dietaPath = fullUrl.split("/dietas/")[1];

      if (dietaPath) {
        let nombreFormateado = decodeURIComponent(dietaPath)
          .replace('%20', ' ')
          .replace(/\//g, ' ');

        nombreFormateado = nombreFormateado.charAt(0).toUpperCase() + nombreFormateado.slice(1).toLowerCase(); 

        setNombreDieta(nombreFormateado);
      }
    }
  }, [router]);

  useEffect(() => {
    const fetchPlanAlimenticio = async () => {
      try {
        if (nombreDieta) {
          const response = await fetch(`http://localhost:3001/planes-alimenticios/obtener-por-nombre/${nombreDieta}`)
          const data = await response.json();

          setDieta(data);
        }
      } catch(error) {
        console.error('Error al obtener la dieta:', error);
      }
    }

    fetchPlanAlimenticio();
  }, [nombreDieta]);

  const idDieta = dieta?.id;

  useEffect(() => {
    const fetchPlatillos = async () => {
      try {
        if (idDieta) {
          const response = await fetch(`http://localhost:3001/planes-alimenticios-tiene-platillos/obtener-todos-platillos-por-id-plan-alimenticio/${idDieta}`);
          const platillos = await response.json();

          setPlatillos(platillos);
        }
      } catch(error){ 
        console.error('Error al obtener los platillos:', error);
      }
    }
    
    if (idDieta) {
      fetchPlatillos();
    }
  }, [idDieta]);


  return (
    <div className="flex justify-center items-center content-center min-h-screen"> 
      <div className="px-6 bg-[#e3f2fd] rounded-lg py-12 max-w-[900px] my-6 mx-2">
        <h1 className="text-[#1a237e] text-[32px] text-center font-bold">
          Menú Semanal
        </h1>
        <h2 className="text-center text-2xl font-bold text-navy-900 mb-2">
          {nombreDieta}
        </h2>
        
        {/* Diet description */}
        <p className="text-gray-900 text-[16px] text-center mb-[20px] p-[10px] bg-[#bbdefb] rounded-lg">
          {dieta?.descripcion || 'Descripción no disponible'}
        </p>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-[120px_repeat(7,1fr)] text-sm border border-green-300">
              <div className="bg-green-400 p-3 font-medium"></div>
              {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((d) => (
                <div key={d} className="bg-green-400 p-3 text-center font-medium border-l border-green-300">
                  {d}
                </div>
              ))}

              {/* Meal Rows */}
              {['Desayuno', 'Almuerzo', 'Merienda', 'Cena'].map((turno) => (
                <React.Fragment key={turno}>
                  <div className="text-center bg-green-100 p-3 font-medium border-t border-green-300">
                    {turno}
                  </div>
                  {[...Array(7)].map((_, dayIndex) => {
                    const platillo = platillos.find(p => p.turno === turno.toLowerCase() && platillos.indexOf(p) % 7 === dayIndex);
                    return (
                      <div key={dayIndex} className="p-3 text-center border-l border-t border-green-300 bg-white">
                        {platillo ? platillo.nombre : 'No disponible'}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}