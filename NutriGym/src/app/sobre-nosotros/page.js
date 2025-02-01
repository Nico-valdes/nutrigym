import Link from 'next/link'
import { useEffect } from 'react';
import { useMetaDataContext } from '@/components/layout/metaDataContext';

export default function SobreNosotrosPage() {
  const { setTitle, setName, setContent } = useMetaDataContext();
          
  useEffect (() => {
    setTitle("Sobre Nosotros");
    setName("description");
    setContent("Conocé quiénes somos, nuestra misión, nuestra visión y lo que ofrecemos.");
  }, []);

  return (
    <>
          <div className="min-h-screen flex bg-gray-100">
            <aside class="w-[375px] flex-shrink-0 bg-white shadow-lg p-4">
              <h2 class="text-[24px] font-bold mb-2">Tópicos</h2>
                <nav>
                  <ul class="list-none">
                    <li>
                      <Link href="#nues-mis" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">Nuestra misión</Link>
                    </li>
                    <li>
                      <Link href="#como-func" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">¿Cómo funciona?</Link>
                    </li>
                    <li>
                      <Link href="#lo-que-ofr" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">Lo que ofrecemos</Link>
                    </li>
                    <li>
                      <Link href="#nues-vis" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">Nuestra visión</Link>
                    </li>
                    <li>
                      <Link href="#contact" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">Contactanos</Link>
                    </li>
                  </ul>
                </nav>
              </aside>

              <main class="p-10 md:w-2/5 ml-28 md:mr-30 border-t border-b border-[#21273833] md:border-0 bg-white flex-shrink-0 bg-white shadow-lg">
                <h1 class="text-3xl font-bold mb-5">SOBRE NOSOTROS</h1>

                <p class="mb-5">Bienvenido a NutriGym, tu plataforma de confianza para soluciones personalizadas de salud y fitness. En NutriGym, creemos que alcanzar tus objetivos de fitness debe ser más que un esfuerzo temporal: debe ser un cambio de estilo de vida sostenible que te empodere para convertirte en la mejor versión de ti mismo.</p>

                <nav class="mb-10">
                  <ul>
                    <li class="mb-5">
                      <h3 class="text-xl mb-3 font-bold" id="nues-mis">Nuestra misión</h3>
                      <p class="mb-3 pl-2"><span class="font-bold">Nuestra misión es simple:</span> proporcionar planes de entrenamiento y nutrición personalizados, basados en datos, que te ayuden a lograr tus objetivos de fitness únicos. Ya sea que busques ganar masa muscular, mejorar tu resistencia o emprender un camino hacia la pérdida de peso, NutriGym está diseñado para apoyarte en cada paso del camino.</p>
                    </li>
                    <li class="mb-5">
                      <h3 class="text-xl mb-3 font-bold" id="como-func">¿Cómo funciona?</h3>
                      <p class="mb-3 pl-2">NutriGym aprovecha la tecnología para crear planes basados en tus datos personales, perfil físico, preferencias alimenticias y limitaciones de entrenamiento. Generamos un plan integral adaptado a tus objetivos, desde entrenamientos en casa hasta programas de nutrición especializados.</p>
                    </li>
                    <li class="mb-5">
                      <h3 class="text-xl mb-3 font-bold" id="lo-que-ofr">Lo que ofrecemos</h3>
                      <ul class="ml-5">
                        <li class="mb-2 pl-2"><span class="font-bold">Planes de Entrenamiento Personalizados:</span>Hipertrofia, potencia o resistencia adaptados a tus necesidades.</li>
                        <li class="mb-2 pl-2"><span class="font-bold">Guía Nutricional:</span> Planes de comidas sostenibles, con opciones para restricciones dietéticas.</li>
                        <li class="mb-2 pl-2"><span class="font-bold">Enfoque Holístico:</span> Promovemos cambios graduales para resultados duraderos.</li>
                      </ul>
                    </li>
                    <li class="mb-5">
                      <h3 class="text-xl mb-3 font-bold" id="nues-vis">Nuestra visión</h3>
                      <p class="mb-3 pl-2"> NutriGym busca hacer el fitness accesible y efectivo para todos.</p>
                    </li>
                    <li class="mb-5">
                      <h3 class="text-xl mb-3 font-bold" id="contact">Contactanos</h3>
                      <p class="mb-3 pl-2">Escríbenos a <Link href="mailto:nutrigym.official@gmail.com" class="text-blue-500 hover:underline">nutrigym.official@gmail.com</Link> o síguenos en redes sociales para actualizaciones.</p>
                      
                    </li>
              </ul>
            </nav>
          </main>
        </div>
      </>
    )
}