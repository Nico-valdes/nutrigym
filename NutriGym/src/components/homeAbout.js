'use client'
import musculo from "../public/musculo.jpg"
import Image from 'next/image'

export default function HomeAbout() {
    return (
        <>
        <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Sobre nosotros</h3>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <p className="text-lg mb-6">
                  En <span className="text-primary font-bold">NutriGym</span>, creemos que cada persona es única y merece un plan de salud y bienestar personalizado. Somos un equipo que intenta ayudar a cada usuario a alcanzar sus metas, ya sea que quieras perder peso, ganar masa muscular, mejorar tu rendimiento deportivo o simplemente sentirte más saludable y fuerte.
                </p>
                <p className="text-lg font-semibold mb-4">Con nuestros <span className="text-primary">planes personalizados</span>, tendrás acceso a:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><span className="font-semibold">Entrenamientos diseñados a tu medida:</span> Adaptados a tus objetivos, nivel de condición física y preferencias.</li>
                  <li><span className="font-semibold">Guías nutricionales completas:</span> Planes de alimentación flexibles y deliciosos que se ajustan a tu estilo de vida.</li>
                  <li><span className="font-semibold">Soporte personalizado:</span> Un chat a tu disposición para responder a tus preguntas y motivarte en cada paso del camino.</li>
                </ul>
                <p className="text-lg mt-6">
                  Nuestra misión es empoderarte para que tomes el control de tu salud y alcances tu máximo potencial. ¡Únete a nuestra comunidad y descubre la mejor versión de ti mismo!
                </p>
              </div>
              <div className="md:w-1/2">
                <Image 
                  src={musculo} 
                  alt="Logros de NutriGym" 
                  width={800} 
                  height={600} 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        </section>
        </>)
}