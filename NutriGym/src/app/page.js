'use client'

import { useRouter } from "next/navigation.js"
import { Dumbbell, Salad } from "lucide-react"
import HomeAbout from "../components/homeAbout.js"
import Card from "../components/Card.js"

export default function Home() {
  const router = useRouter();

  const handleClick = (page) => {
    router.push(page);
  }


  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <section className="py-20 bg-gradient-to-r from-primary to-[#fd8868] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-extrabold mb-6">Tu salud, nuestro objetivo.</h1>
              <p className="text-xl mb-8">¿Quieres transformar tu cuerpo y sentirte más saludable? ¡Somos tu equipo! Ofrecemos planes personalizados de entrenamiento y nutrición para ayudarte a alcanzar tus metas.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card 
                title="Generá tu plan de entrenamiento" 
                description="Diseña tu cuerpo ideal con nuestro plan de entrenamiento personalizado. Mejora tu condición física. ¡Adaptamos cada rutina a tus necesidades y objetivos!"
                icon={<Dumbbell size={24} className="text-primary" />}
                handleClick={() => handleClick("/rutinas")}
              />
              <Card 
                title="Generá tu plan nutricional" 
                description="Alimenta tu cuerpo y transforma tu vida con nuestro plan nutricional! Crea hábitos alimenticios saludables y eficaces para ayudarte a alcanzar tus metas."
                icon={<Salad size={24} className="text-primary" />}
                handleClick={() => handleClick("/dietas")}
              />
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">¿Tenés dudas sobre qué es lo que buscas?</h3>
            <p className="text-xl text-gray-600 mb-8">Aquí te brindamos asesoramiento sobre cuáles son tus verdaderos objetivos y cómo podés alcanzarlos.</p>
            <button 
              onClick={() => handleClick("crear-plan")} 
              className="bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-primary-dark transition duration-300"
            >
              Generá tu plan!
            </button>
          </div>
        </section>

        <HomeAbout />
      </div>
    </>
  )
}