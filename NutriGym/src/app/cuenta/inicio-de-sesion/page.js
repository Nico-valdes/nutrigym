"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useMetaDataContext } from "@/components/layout/metaDataContext";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);
  const { setTitle, setName, setContent } = useMetaDataContext();
  
  useEffect (() => {
    setTitle("Inicio de Sesión");
    setName("description");
    setContent("Inicia sesión y disfruta de nuestros servicios.");
  }, []);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);
    const result = await signIn('credentials', {
      email,
      password: contrasenia,
      callbackUrl: '/',
      redirect: false
    });

    if (result?.error) {
      console.error("Error de inicio de sesión:", result.error);
    } else {
      window.location.href = result.url;
    }
    
    setLoginInProgress(false);
  }

  return (
    <main>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-2">Inicio de sesión</h1>
          <p className="text-center text-gray-600 mb-6">Accede a tu cuenta</p>
          
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                disabled={loginInProgress}
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
                disabled={loginInProgress}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>
            <button
              type="submit"
              disabled={loginInProgress}
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loginInProgress ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>
          </form>
          
          <p className="mt-6 text-center text-sm text-gray-600">
            ¿No tienes una cuenta?{' '}
            <Link href="/account/register" className="font-medium text-black hover:underline">
              Regístrate
            </Link>
          </p> 
        </div>
      </div>
    </main>
  );
}
