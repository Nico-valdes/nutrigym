import Link from 'next/link'
import { useEffect } from 'react';
import { useMetaDataContext } from '@/components/layout/metaDataContext';

export default function TerminosYcondicionesDeUsoPage() {
  const { setTitle, setName, setContent } = useMetaDataContext();
            
    useEffect (() => {
      setTitle("Términos y Condiciones de Uso");
      setName("description");
      setContent("Conocé los términos y condiciones de uso que rigen en nuestra web.");
    }, []);

    return (
        <>
          <div className="min-h-screen flex bg-gray-100">
            <aside class="w-[375px] flex-shrink-0 bg-white shadow-lg p-4">
              <h2 class="text-[24px] font-bold mb-2">Términos</h2>
                <nav>
                  <ul class="list-none">
                    <li>
                      <Link href="#use-serv" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">1. Uso del Servicio</Link>
                    </li>
                    <li>
                      <Link href="#rec-cuen" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">2. Requisitos de la Cuenta</Link>
                    </li>
                    <li>
                      <Link href="#resp-usu" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">3. Responsabilidad del Usuario</Link>
                    </li>
                    <li>
                      <Link href="#lim-serv" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">4. Limitaciones del Servicio</Link>
                    </li>
                    <li>
                      <Link href="#plan-entre-y-nutr" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">5. Planes de Entrenamiento y Nutrición</Link>
                    </li>
                    <li>
                      <Link href="#prop-intel" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">6. Propiedad Intelectual</Link>
                    </li>
                    <li>
                      <Link href="#priv-protect" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">7. Privacidad y Protección de Datos</Link>
                    </li>
                    <li>
                      <Link href="#mod-susp-serv" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">8. Modificación y Suspensión del Servicio</Link>
                    </li>
                    <li>
                      <Link href="#lim-res" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">9. Limitación de Responsabilidad</Link>
                    </li>
                    <li>
                      <Link href="#indem" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">10. Indemnización</Link>
                    </li>
                    <li>
                      <Link href="#ley-apl" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">11. Ley Aplicable</Link>
                    </li>
                    <li>
                      <Link href="#mod-terms" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">12. Modificaciones de los Términos</Link>
                    </li>
                    <li>
                      <Link href="#contact" class="py-2 px-4 block text-gray-700 hover:text-[#F42F00] transition-colors duration-300">13. Contacto</Link>
                    </li>
                  </ul>
                </nav>
              </aside>

              <main class="p-10 md:w-2/5 ml-28 md:mr-30 border-t border-b border-[#21273833] md:border-0 bg-white flex-shrink-0 bg-white shadow-lg">
                <h1 class="text-3xl font-bold mb-5">TÉRMINOS Y CONDICIONES DE USO</h1>

                <h2 class="text-xl mb-5">Última actualización: 12/11/2024</h2>
                <p class="mb-5">Bienvenido a NutriGym. Estos Términos y Condiciones de Uso (“Términos”) regulan el acceso y uso de nuestro software web (el “Servicio”) que permite a los usuarios generar planes personalizados de entrenamiento físico y nutrición. Al acceder o usar NutriGym, aceptas cumplir con estos Términos y Condiciones, así como con nuestra Política de Privacidad. Si no estás de acuerdo con estos Términos, no debes usar el Servicio.</p>

                <nav class="mb-10">
                  <ol>
                    <li class="mb-5">
                      <h3 class="text-xl mb-3 font-bold" id="use-serv">1. Uso del Servicio</h3>
                      <p class="mb-3 pl-2">NutriGym ofrece un software en línea diseñado para generar planes de entrenamiento físico y nutrición basados en los datos proporcionados por los usuarios. El usuario se compromete a utilizar el Servicio de manera responsable y respetuosa, sin infringir las leyes, derechos de propiedad, o normas aplicables.</p>
                    </li>
                    <li class="mb-5">
                      <h3 class="text-xl mb-3 font-bold" id="rec-cuen">2. Requisitos de la Cuenta</h3>
                      <p class="mb-3 pl-2">Para utilizar el Servicio, debes crear una cuenta proporcionando información precisa, completa y actualizada. Eres responsable de mantener la confidencialidad de tus credenciales de acceso y de todas las actividades realizadas en tu cuenta. Si sospechas que tu cuenta ha sido comprometida, debes notificarlo inmediatamente a NutriGym.</p>
                    </li>
                    <li class="mb-5">
                      <h3 class="text-xl mb-3 font-bold" id="resp-usu">3. Responsabilidad del Usuario</h3>
                      <p class="mb-3 pl-2">El usuario es responsable de proporcionar información precisa y completa sobre su físico, limitaciones, objetivos y cualquier otra información relevante para generar su plan personalizado. El usuario reconoce que la información proporcionada debe ser precisa para que los planes generados sean efectivos y seguros.</p>
                    </li>
                    <li class="mb-5">
                      <h3 class="text-xl mb-3 font-bold" id="lim-serv">4. Limitaciones del Servicio</h3>
                      <p class="mb-3 pl-2">NutriGym ofrece planes generales de entrenamiento y nutrición basados en los datos proporcionados por los usuarios, pero no está diseñado para reemplazar la orientación de un profesional de la salud, nutricionista o entrenador personal. El usuario entiende que cualquier cambio en su rutina de ejercicio o dieta debe ser consultado previamente con un profesional adecuado, especialmente si existen condiciones médicas preexistentes.</p>
                    </li>
                    <li class="mb-5">
                      <h3 class="text-xl mb-3 font-bold" id="plan-entre-y-nutr">5. Planes de Entrenamiento y Nutrición</h3>
                      <p class="mb-3 pl-2">Los planes generados por el Servicio son personalizados según los datos proporcionados, pero el usuario entiende que los resultados pueden variar y no están garantizados. NutriGym no se hace responsable por lesiones, enfermedades o efectos adversos resultantes del uso del Servicio.</p>
                      <ul class="ml-5">
                        <li class="mb-2 pl-2"><span class="font-bold">Entrenamiento:</span> El Servicio genera planes de entrenamiento basados en tres tipos de objetivos: hipertrofia, potencia y resistencia. El usuario también puede especificar limitaciones en los materiales de entrenamiento, y el sistema adaptará los ejercicios de acuerdo con esas restricciones.</li>
                        <li class="mb-2 pl-2"><span class="font-bold">Nutrición:</span> El Servicio genera planes de nutrición adaptados a los objetivos del usuario, como pérdida de peso, recomposición física o aumento de masa muscular, teniendo en cuenta posibles limitaciones alimenticias, como alergias.</li>
                      </ul>
                    </li>
                    <li class="mb-5">
                      <h3 class="text-xl mb-3 font-bold" id="prop-intel">6. Propiedad Intelectual</h3>
                      <p class="mb-3 pl-2">Todos los derechos de propiedad intelectual, incluidos los derechos de autor y marcas registradas, sobre el Servicio, su contenido y su diseño, son propiedad de NutriGym o sus licenciantes. El uso del Servicio no otorga al usuario ningún derecho sobre la propiedad intelectual de NutriGym.</p>
                    </li>
                    <li class="mb-5">
                      <h3 class="text-xl mb-3 font-bold" id="priv-protect">7. Privacidad y Protección de Datos</h3>
                      <p class="mb-3 pl-2">Nos comprometemos a proteger su privacidad y a manejar sus datos personales de acuerdo con nuestra Política de Privacidad, disponible en <Link href="../politicas-de-privacidad" class="text-blue-500 hover:underline">este enlace</Link>. Al usar nuestro sitio web, usted acepta la recopilación y el uso de su información de acuerdo con esta política.</p>
                    </li>
                    <li class="mb-5">
                      <h3 class="text-xl mb-3 font-bold" id="mod-susp-serv">8. Modificación y Suspensión del Servicio</h3>
                      <p class="mb-3 pl-2">NutriGym se reserva el derecho de modificar o suspender el Servicio en cualquier momento, ya sea temporal o permanentemente, con o sin previo aviso. No seremos responsables ante el usuario ni ante terceros por cualquier modificación, suspensión o interrupción del Servicio.</p>
                  </li>
                 <li class="mb-5">
                    <h3 class="text-xl mb-3 font-bold" id="lim-res">9. Limitación de Responsabilidad</h3>
                    <p class="mb-3 pl-2">En la medida máxima permitida por la ley, NutriGym no será responsable por cualquier daño indirecto, incidental, especial o consecuente que surja del uso o incapacidad de uso del Servicio, incluyendo, pero no limitado a, pérdidas de datos, ingresos o beneficios.</p>
                </li>
                <li class="mb-5">
                  <h3 class="text-xl mb-3 font-bold" id="indem">10. Indemnización</h3>
                  <p class="mb-3 pl-2">El usuario acuerda indemnizar y eximir de responsabilidad a NutriGym, sus empleados, agentes y afiliados, de cualquier reclamo, daño, pérdida o gasto (incluidos honorarios legales) derivados de su uso del Servicio, de cualquier incumplimiento de estos Términos o de cualquier contenido que el usuario envíe.</p>
                </li>
                <li class="mb-5">
                  <h3 class="text-xl mb-3 font-bold" id="ley-apl">11. Ley Aplicable</h3>
                  <p class="mb-3 pl-2">Estos Términos se regirán e interpretarán de acuerdo con las leyes del país o región en la que se encuentre NutriGym, sin dar efecto a sus principios de conflictos de leyes.</p>
                </li>
                <li class="mb-5">
                  <h3 class="text-xl mb-3 font-bold" id="mod-terms">12. Modificaciones de los Términos</h3>
                  <p class="mb-3 pl-2">NutriGym se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones serán efectivas una vez publicadas en el sitio web. El usuario acepta revisar estos Términos periódicamente para estar al tanto de cualquier cambio.</p>
                </li>
                <li class="mb-5">
                  <h3 class="text-xl mb-3 font-bold" id="contact">13. Contacto</h3>
                  <p class="mb-3 pl-2">Para cualquier consulta o reclamo relacionado con estos Términos y Condiciones, puede contactarnos a través de <Link href="mailto:nutrigym.official@gmail.com" class="text-blue-500 hover:underline">nutrigym.official@gmail.com</Link>.</p>
                </li>
              </ol>
            </nav>
          </main>
        </div>
      </>
    )
}