"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useMetaDataContext } from "@/components/layout/metaDataContext";

export default function CreatePlatilloPage() {
  const [nombre, setNombre] = useState('');
  const [turno, setTurno] = useState('');
  const [creatingPlatillo, setCreatingPlatillo] = useState(false);
  const [platilloCreated, setPlatilloCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { setTitle, setName, setContent } = useMetaDataContext();
      
  useEffect (() => {
    setTitle("Crear Platillo");
    setName("description");
    setContent("Crea un nuevo platillo.");
  }, []);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingPlatillo(true);
    setErrorMessage('');
    setPlatilloCreated(false);

    const response = await fetch(`http://localhost:3001/platillos/crear`, {
      method: 'POST',
      body: JSON.stringify({ nombre, turno }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      setPlatilloCreated(true);
      setCreatingPlatillo(false);
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.errores?.map(e => e.msg).join(', ') || 'Error al crear el platillo');
      setCreatingPlatillo(false);
    }
  }

  return (
    <main>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-2">Crear platillo</h1>
          <p className="text-center text-gray-600 mb-6">Crea un platillo con su turno</p>

          {platilloCreated && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
              El platillo ha sido creado. Verificalo en el <Link href="/account/adminPanel" className="font-medium underline">panel de administrador</Link>.
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
                disabled={creatingPlatillo}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>
            <div>
                <label for="turno" className="text-lg">Escoge un turno</label>
                <select
                  id="turno"
                  name="Turno"
                  size="4"
                  value={turno}
                  onChange={(ev) => setTurno(ev.target.value)}
                  disabled={creatingPlatillo}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-400 focus:text-black focus:outline-none focus:ring-1 focus:ring-gray-900"
                >
                  <option value="desayuno">Desayuno</option>
                  <option value="almuerzo">Almuerzo</option>
                  <option value="merienda">Merienda</option>
                  <option value="cena">Cena</option>
                </select>
              </div>

              <div className="w-[100%] py-2">
                  <div className="w-[90%] justify-center h-[2px] bg-[#D2D2D255] mx-auto"></div>
              </div>
            
            <button
              type="submit"
              disabled={creatingPlatillo}
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {creatingPlatillo ? 'Creando...' : 'Crear'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}