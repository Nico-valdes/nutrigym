"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import { useMetaDataContext } from "@/components/layout/metaDataContext";

export default function EditPlatilloPage() {
  const router = useRouter()

  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState('');
  const [turno, setTurno] = useState('');
  const [updatingPlatillo, setUpdatingPlatillo] = useState(false);
  const [platilloUpdated, setPlatilloUpdated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { setTitle, setName, setContent } = useMetaDataContext();
        
  useEffect (() => {
    setTitle("Editar Platillo");
    setName("description");
    setContent("Edita un platillo.");
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullUrl = window.location.href;
      const segments = fullUrl.split('/');
      const id = segments[segments.length - 1];

      setId(id);
    }
  }, [router]);

  useEffect(() => {
    if (id) {
      obtainPlatillo();
    }
  }, [id]);

  const obtainPlatillo = async () => {
    try {
      const response = await fetch(`http://localhost:3001/platillos/obtener-por-id/${id}`);
      
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
  
      const data = await response.json();

      setNombre(data.nombre || '');
      setTurno(data.turno || '');
    } catch (error) {
      console.error("Error al obtener el platillo:", error);
      setErrorMessage("Error al obtener datos del platillo.");
    }
  };

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setUpdatingPlatillo(true);
    setErrorMessage('');
    setPlatilloUpdated(false);

    try {
      const response = await fetch(`http://localhost:3001/platillos/actualizar/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ nombre, turno }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setPlatilloUpdated(true);
        setUpdatingPlatillo(false);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.errores?.map(e => e.msg).join(', ') || 'Error al actualizar el platillo');
        setUpdatingPlatillo(false);
      }
    } catch (error) {
      console.error("Error al actualizar el platillo:", error);
      setErrorMessage("Hubo un problema al actualizar el platillo.");
      setUpdatingPlatillo   (false);
    }
  }

  return (
    <main>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-2">Editar platillo</h1>
          <p className="text-center text-gray-600 mb-6">Edita los detalles del platillo</p>

          {platilloUpdated && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
              El platillo ha sido actualizado. Verifícalo en el <Link href="/account/adminPanel" className="font-medium underline">panel de administrador</Link>.
            </div>
          )}
          {errorMessage && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="flex space-x-4">
                  <input
                      type="text"
                      placeholder="Nombre"
                      value={nombre}
                      onChange={(ev) => setNombre(ev.target.value)}
                      disabled={updatingPlatillo}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-400 focus:text-black focus:outline-none focus:ring-1 focus:ring-gray-900"
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
                  disabled={updatingPlatillo}
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
                  disabled={updatingPlatillo}
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                  {updatingPlatillo ? 'Actualizando...' : 'Actualizar'}
              </button>
          </form>

        </div>
      </div>
    </main>
  );
}
