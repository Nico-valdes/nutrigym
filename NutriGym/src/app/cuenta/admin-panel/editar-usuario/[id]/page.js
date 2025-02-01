"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ToggleSwitch from "../../../../../components/toggleSwitch";
import BotonesPdf from "../../../../../components/account/adminPanel/botonesPdf";
import { useRouter } from "next/navigation"
import { FileText, X } from 'lucide-react'
import daisyui from "daisyui"
import { useMetaDataContext } from "@/components/layout/metaDataContext";


export default function EditUserPage() {
  const router = useRouter()

  const [id, setId] = useState(0);
  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [idRol, setIdRol] = useState(2);
  const [idRutinaPdf, setIdRutinaPdf] = useState(null);
  const [tieneRutina, setTieneRutina] = useState(false);
  const [pdfs, setPdfs] = useState([]);
  const [editingUser, setEditingUser] = useState(false);
  const [userUpdated, setUserUpdated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [toggleState, setToggleState] = useState(false);
  const [defaultToggleValue, setDefaultToggleValue] = useState(false);

  const { setTitle, setName, setContent } = useMetaDataContext();
        
  useEffect (() => {
    setTitle("Editar usuario");
    setName("description");
    setContent("Edita un usuario.");
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
      obtainUser();
    }
  }, [id]);

  const isAdmin = id => {
    return id === 1? true : false;
  }

  const hayRutina = id => {
    return id !== null? true : false;
  }

  const obtainUser = async () => {
    try {
      const response = await fetch(`http://localhost:3001/usuarios/obtener-por-id/${id}`);
      
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
  
      const data = await response.json();
      
      setNombre(data.usuario.nombre || '');
      setApellido(data.usuario.apellido || '');
      setEmail(data.usuario.email || '');
      setIdRol(data.usuario.idRol || 2);
      setIdRutinaPdf(data.usuario.idRutinaPdf);

      setDefaultToggleValue(isAdmin(data.usuario.idRol));
      setTieneRutina(hayRutina(data.usuario.idRutinaPdf));
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      setErrorMessage("Error al obtener datos del usuario.");
    }
  };

  const obtainPdfs = async () => {
    try {
      const response = await fetch(`http://localhost:3001/rutinas-pdf/obtener-todos`);
      
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
  
      const data = await response.json();
      
      setPdfs(data);
    } catch (error) {
      console.error("Error al obtener los PDFs:", error);
      setErrorMessage("Error al obtener datos de los PDFs.");
    }
  };

  const handleToggleChange = (newState) => {
    setToggleState(newState);
    setIdRol(newState ? 1 : 2);
  };

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setEditingUser(true);
    setErrorMessage('');
    setUserUpdated(false);

    try {
      console.log (JSON.stringify({ email, contrasenia, nombre, apellido, idRol, idRutinaPdf }));

      const response = await fetch(`http://localhost:3001/usuarios/actualizar/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ email, contrasenia, nombre, apellido, idRol, idRutinaPdf }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setUserUpdated(true);
        setEditingUser(false);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.errores?.map(e => e.msg).join(', ') || 'Error al actualizar usuario');
        setEditingUser(false);
      }
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      setErrorMessage("Hubo un problema al actualizar el usuario.");
      setEditingUser(false);
    }
  }

  const handleSelectedPdfId = (selectedId) => {
    setIdRutinaPdf(selectedId);
    console.log(selectedId);
  };

  const handlePdfs = () => {
    obtainPdfs();
    document.getElementById('my_modal_4').showModal()
  }

  useEffect(() => {
    if (defaultToggleValue) {
      handleToggleChange(defaultToggleValue);
    }
  }, [defaultToggleValue]);

  return (
    <main>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-2">Editar usuario</h1>
          <p className="text-center text-gray-600 mb-6">Edita los detalles del usuario</p>

          {userUpdated && ( // Cambiado a userUpdated
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
              El usuario ha sido actualizado. Verifícalo en el <Link href="/account/adminPanel" className="font-medium underline">panel de administrador</Link>.
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
                      disabled={editingUser}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-400 focus:text-black focus:outline-none focus:ring-1 focus:ring-gray-900"
                  />
              </div>
              <div>
                  <input
                      type="text"
                      placeholder="Apellido"
                      value={apellido}
                      onChange={(ev) => setApellido(ev.target.value)}
                      disabled={editingUser}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-400 focus:text-black focus:outline-none focus:ring-1 focus:ring-gray-900"
                  />
              </div>
              <div>
                  <input
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
                      disabled={editingUser}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-400 focus:text-black focus:outline-none focus:ring-1 focus:ring-gray-900"
                  />
              </div>
              <div>
                  <input
                      type="password"
                      placeholder="Contraseña"
                      value={contrasenia}
                      onChange={(ev) => setContrasenia(ev.target.value)}
                      disabled={editingUser}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                  />
              </div>
              <div className="flex space-x-4">
                  <label className="ps-[0.15rem] hover:cursor-pointer text-gray-600" htmlFor="ToggleSwitch">
                      Es un administrador?
                  </label>
                  <ToggleSwitch id="ToggleSwitch" defaultState={defaultToggleValue} onToggle={handleToggleChange} />
              </div>
              <div>
                  <button 
                      type="button"
                      onClick={() => handlePdfs()}
                      disabled={editingUser}
                      title={tieneRutina ? "Cambiar rutina" : "Agregar rutina"}
                      className='w-full shadow-md py-2 bg-[#52BCE8] rounded-md text-white hover:bg-[#52ACD8]'
                  >
                      <FileText size={20} className='inline-block'/> {tieneRutina ? "Cambiar rutina" : "Agregar rutina"}
                  </button>
                  <div className="w-[100%]">
                      <dialog id="my_modal_4" className="modal w-[45%] p-10 rounded-md">
                        <div className="modal-box m-auto w-14/15 max-w-full">
                            <h3 className="text-3xl font-bold mb-2">Rutinas</h3>
                            <p className="pt-2 pb-1 text-gray-600">Elige un PDF</p>

                            <BotonesPdf pdfs={pdfs} defaultId={idRutinaPdf} onPdfSelect={handleSelectedPdfId} />

                              <div className="modal-action">
                                  <button 
                                    type="button"
                                      title="Cerrar"
                                      onClick={() => document.getElementById('my_modal_4').close()}
                                      className='w-40 shadow-md py-2 px-3 bg-[#FF5252] rounded-md mt-12 text-white hover:bg-[#E25252]'
                                  >
                                      <X size={20} className='inline-block'/> Cerrar
                                  </button>
                              </div>
                          </div>
                      </dialog>
                  </div>
              </div>

              <div className="w-[100%] py-2">
                  <div className="w-[90%] justify-center h-[2px] bg-[#D2D2D255] mx-auto"></div>
              </div>

              <button
                  type="submit"
                  disabled={editingUser}
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                  {editingUser ? 'Actualizando...' : 'Actualizar'}
              </button>
          </form>

        </div>
      </div>
    </main>
  );
}
