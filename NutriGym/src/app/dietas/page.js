"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'
import Link from 'next/link.js';
import DietCard from "../../components/dietCard"
import { dietasInfo } from "../../mocks/dietasInfo"
import { useMetaDataContext } from '@/components/layout/metaDataContext';

export default function DietasPage() {
  const [dietas, setDietas] = useState([])

  const { setTitle, setName, setContent } = useMetaDataContext();
        
  useEffect (() => {
    setTitle("Dietas");
    setName("description");
    setContent("Elige una opción para continuar.");
  }, []);


  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setDietas(dietas)
    }, 500)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Descubre tu <span className="text-green-600">Dieta Ideal</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Explora nuestras dietas cuidadosamente seleccionadas para encontrar la que mejor se adapte a tus objetivos de salud y estilo de vida.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dietasInfo.map((dieta, index) => (
            <Link key={index} href={`dietas/${dieta.nombre}`}>
              <DietCard key={index} dieta={dieta} index={index} />
            </Link>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-600">
            Recuerda, la mejor dieta es aquella que puedes mantener a largo plazo y que se adapta a tus necesidades individuales.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Consulta con un nutricionista
              <Leaf className="ml-2 -mr-1 h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}