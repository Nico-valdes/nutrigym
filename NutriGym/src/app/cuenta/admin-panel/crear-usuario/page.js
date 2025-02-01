"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ToggleSwitch from "../../../../components/toggleSwitch";
import { useMetaDataContext } from "@/components/layout/metaDataContext";

export default function CreateUserPage() {
  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [idRol, setIdRol] = useState(2);
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [toggleState, setToggleState] = useState(false);

  const { setTitle, setName, setContent } = useMetaDataContext();
      
  useEffect (() => {
    setTitle("Crear Usuario");
    setName("description");
    setContent("Crea un nuevo usuario.");
  }, []);

  const handleToggleChange = (newState) => {
    setToggleState(newState);

    if (newState) { setIdRol(1) } else { setIdRol(2) }
  }

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setErrorMessage('');
    setUserCreated(false);

    const response = await fetch(`http://localhost:3001/usuarios/registrar`, {
      method: 'POST',
      body: JSON.stringify({ email, contrasenia, nombre, apellido, idRol }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      setUserCreated(true);
      setCreatingUser(false);
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.errores?.map(e => e.msg).join(', ') || 'Error al registrar usuario');
      setCreatingUser(false);
    }
  }

  return (
    <main>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-2">Crear usuario</h1>
          <p className="text-center text-gray-600 mb-6">Crea una cuenta</p>

          {userCreated && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
              El usuario ha sido creado. Verificalo en el <Link href="/account/adminPanel" className="font-medium underline">panel de administrador</Link>.
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
                disabled={creatingUser}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Apellido"
                value={apellido}
                onChange={(ev) => setApellido(ev.target.value)}
                disabled={creatingUser}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                disabled={creatingUser}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Contraseña"
                value={contrasenia}
                onChange={(ev) => setContrasenia(ev.target.value)}
                disabled={creatingUser}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>
            <div className="flex space-x-4">
              <label
                className="ps-[0.15rem] hover:cursor-pointer text-gray-600"
                for="ToggleSwitch"
                >
                  Es un administrador?
              </label>
              <ToggleSwitch id="ToggleSwitch" onToggle={handleToggleChange}/>

            </div>

            <div className="w-[100%] py-2">
                  <div className="w-[90%] justify-center h-[2px] bg-[#D2D2D255] mx-auto"></div>
              </div>
              
            <button
              type="submit"
              disabled={creatingUser}
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {creatingUser ? 'Registrando...' : 'Registrar'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}