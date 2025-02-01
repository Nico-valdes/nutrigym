"use client"

import { useRouter } from 'next/navigation';
import { UserPlus, LogIn, ArrowRight } from 'lucide-react';

export default function PrimeroRegistrate() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="mx-auto w-20 h-20 bg-[#F42F00] rounded-full flex items-center justify-center mb-6">
                <UserPlus className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                ¡Bienvenido a NutriGym!
              </h1>
              <p className="text-gray-600 text-lg">
                Para acceder a tu plan personalizado, necesitas iniciar sesión
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-3">
                  <LogIn className="w-5 h-5 mr-2 text-[#F42F00]" />
                  Beneficios de tu cuenta
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2 text-[#F42F00]" />
                    Plan de entrenamiento personalizado
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2 text-[#F42F00]" />
                    Seguimiento de tu progreso
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2 text-[#F42F00]" />
                    Rutinas adaptadas a tus objetivos
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push('/account')}
                  className="flex-1 px-6 py-3 bg-[#F42F00] text-white rounded-lg hover:bg-[#D42800] transition-colors duration-200 flex items-center justify-center"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Registrarse
                </button>
                <button
                  onClick={() => router.push('/account')}
                  className="flex-1 px-6 py-3 border-2 border-[#F42F00] text-[#F42F00] rounded-lg hover:bg-[#FFF5F5] transition-colors duration-200 flex items-center justify-center"
                >
                  <LogIn className="w-5 h-5 mr-2" />
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              ¿Necesitas ayuda? Contáctanos en{' '}
              <a href="mailto:soporte@nutrigym.com" className="text-[#F42F00] hover:underline">
                soporte@nutrigym.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
