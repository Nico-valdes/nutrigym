import Link from 'next/link'
import { useEffect } from 'react';
import { useMetaDataContext } from '@/components/layout/metaDataContext';

export default function TerminosYcondicionesDeUsoPage() {
  const { setTitle, setName, setContent } = useMetaDataContext();
          
  useEffect (() => {
    setTitle("Políticas de Privacidad");
    setName("description");
    setContent("Conocé las políticas de privacidad que rigen en nuestra web.");
  }, []);
    
  return (
    <>
      <div className="min-h-screen flex bg-gray-100">
        <aside class="w-[375px] flex-shrink-0 bg-white shadow-lg p-4">
          <h2 class="text-[24px] font-bold mb-2">Políticas</h2>
          <nav>
            <ul class="list-none">
              <li>
                <Link href="#reco-inf" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">1.Recopilación de Información</Link>
              </li>
              <li>
                <Link href="#uso-inf" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">2. Uso de la Información</Link>
              </li>
              <li>
                <Link href="#prot-dat" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">3. Protección de Datos</Link>
              </li>
              <li>
                <Link href="#comp-inf" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">4. Compartición de Información</Link>
              </li>
              <li>
                <Link href="#tus-der" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">5. Tus Derechos</Link>
              </li>
              <li>
                <Link href="#camb-pol" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">6. Cambios en la Política de Privacidad</Link>
              </li>
              <li>
                <Link href="#contact" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">7. Contacto</Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main class="p-10 md:w-2/5 ml-28 md:mr-30 border-t border-b border-[#21273833] md:border-0 bg-white flex-shrink-0 bg-white shadow-lg">
          <h1 class="text-3xl font-bold mb-5">POLÍTICAS DE PRIVACIDAD</h1>

          <h2 class="text-xl mb-5">Última actualización: 12/11/2024</h2>
          <p class="mb-5">En NutriGym, respetamos tu privacidad y estamos comprometidos a proteger la información personal que compartes con nosotros. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos tus datos personales.</p>

          <nav class="mb-10">
            <ol>
              <li class="mb-5">
                <h3 class="text-xl mb-3 font-bold" id="reco-inf">1. Recopilación de Información</h3>
                <p class="mb-3 pl-2">Recopilamos información personal que proporcionas al registrarte, completar tu perfil y usar nuestros servicios. Esto incluye:</p>
                <ul class="ml-5">
                  <li class="mb-2 pl-2"><span class="font-bold">Datos de contacto:</span> nombre, correo electrónico, número de teléfono.</li>
                  <li class="mb-2 pl-2"><span class="font-bold">Información física y de salud:</span> peso, altura, objetivos de entrenamiento, restricciones alimenticias.</li>
                  <li class="mb-2 pl-2"><span class="font-bold">Preferencias de entrenamiento y alimentación</span>.</li>
                </ul>
              </li>
              <li class="mb-5">
                <h3 class="text-xl mb-3 font-bold" id="uso-inf">2. Uso de la Información</h3>
                <p class="mb-3 pl-2">Utilizamos tu información para:</p>
                <ul class="ml-5">
                  <li class="mb-2 pl-2">Crear planes de entrenamiento y nutrición personalizados.</li>
                  <li class="mb-2 pl-2">Mejorar y optimizar nuestros servicios.</li>
                  <li class="mb-2 pl-2">Enviarte comunicaciones importantes relacionadas con tu cuenta y actualizaciones de nuestros servicios.</li>
                </ul>
              </li>
              <li class="mb-5">
                <h3 class="text-xl mb-3 font-bold" id="prot-dat">3. Protección de Datos</h3>
                <p class="mb-3 pl-2">Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción.</p>
              </li>
              <li class="mb-5">
                <h3 class="text-xl mb-3 font-bold" id="comp-inf">4. Compartición de Información</h3>
                <p class="mb-3 pl-2">No compartimos tu información personal con terceros, excepto cuando sea necesario para:</p>
                <ul class="ml-5">
                  <li class="mb-2 pl-2">Cumplir con las leyes aplicables.</li>
                  <li class="mb-2 pl-2">Proteger nuestros derechos y seguridad.</li>
                </ul>
              </li>
              <li class="mb-5">
                <h3 class="text-xl mb-3 font-bold" id="tus-der">5. Tus Derechos</h3>
                <p class="mb-3 pl-2">Tienes derecho a acceder, corregir o eliminar la información que nos has proporcionado. También puedes solicitar la limitación del uso de tus datos personales o retirar tu consentimiento en cualquier momento.</p>
              </li>
              <li class="mb-5">
                <h3 class="text-xl mb-3 font-bold" id="camb-pol">6. Cambios en la Política de Privacidad</h3>
                <p class="mb-3 pl-2">Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Notificaremos cualquier cambio importante a través de nuestro sitio web o por correo electrónico.</p>
              </li>
              <li class="mb-5">
                <h3 class="text-xl mb-3 font-bold" id="contact">7. Contacto</h3>
                <p class="mb-3 pl-2">Si tienes preguntas o inquietudes sobre nuestras políticas de privacidad, contáctanos en <Link href="mailto:nutrigym.official@gmail.com" class="text-blue-500 hover:underline">nutrigym.official@gmail.com</Link>.</p>
              </li>
            </ol>
          </nav>
        </main>
      </div>
    </>
  )
}