'use client'

import { useState, useEffect } from 'react'

export default function Component({ titulo = "Documento PDF", descripcion = "Este es un documento PDF importante.", pdfUrl = "#" }) {
  const [isHovered, setIsHovered] = useState(false)
  const [downloadCount, setDownloadCount] = useState(0)

  useEffect(() => {
    const savedCount = localStorage.getItem('downloadCount')
    if (savedCount) {
      setDownloadCount(parseInt(savedCount, 10))
    }
  }, [])

  const handleDownload = () => {
    const newCount = downloadCount + 1
    setDownloadCount(newCount)
    localStorage.setItem('downloadCount', newCount.toString())
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className={`bg-white shadow-lg rounded-xl p-6 max-w-sm w-full transform transition-all duration-300 ${
          isHovered ? 'scale-105 shadow-xl' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{titulo}</h2>
        <p className="text-gray-600 mb-6">{descripcion}</p>
        
        <div className="flex items-center justify-between">
          <a
            href={pdfUrl}
            download
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Descargar PDF
          </a>
          <span className="text-sm text-gray-500">
            Descargas: {downloadCount}
          </span>
        </div>
        
        {isHovered && (
          <div className="mt-4 text-sm text-gray-500 animate-fade-in">
            Tamaño: 2.5 MB | Última actualización: {new Date().toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  )
}