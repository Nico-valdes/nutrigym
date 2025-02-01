import { BicepsFlexed, HeartPulse, ArrowDownWideNarrow, CircleCheckBig, WheatOff, Vegan } from 'lucide-react'
    
export const dietasInfo = [
  {
    nombre: "Perdida de peso",
    descripcion: "Esta dieta está diseñada para ayudarte a perder peso de manera saludable y sostenible. Se centra en una alimentación equilibrada que incluye una variedad de alimentos ricos en nutrientes.",
    principiosBasicos: [
      "Alimentos Ricos en Nutrientes",
      "Control de Porciones",
      "Limitación de Azúcares y Grasas Saturadas",
      "Hidratación",
      "Comidas Regulares"],
    icon: <ArrowDownWideNarrow color="#5d63b6" className="w-12 h-12 text-500" />,
  },
  {
    nombre: "Ganancia de Musculo",
    descripcion: "Esta dieta está diseñada para promover el aumento de masa muscular de manera efectiva y saludable. Se enfoca en una ingesta adecuada de nutrientes y calorías para respaldar tus entrenamientos.",
    principiosBasicos: [
      "Aumento de Calorías",
      "Proteínas Adecuadas",
      "Carbohidratos Complejos",
      "Grasas Saludables",
      "Comidas Frecuentes",
      "Hidratación",
      "Suplementos (opcional)"],
    icon: <BicepsFlexed color="#f7982b" className="w-12 h-12 text-500" />,
  },
  {
    nombre: "Mantenimiento",
    descripcion: "Esta dieta está diseñada para ayudarte a mantener un peso saludable y equilibrado a largo plazo, enfocándose en una alimentación balanceada y hábitos sostenibles.",
    principiosBasicos: [
      "Equilibrio Calórico",
      "Variedad de Alimentos",
      "Porciones Moderadas",
      "Comidas Regulares",
      "Hidratación",
      "Snacks Saludables",
      "Escucha a tu Cuerpo"
    ],
    icon: <HeartPulse color="#e45e5e" className="w-12 h-12 text-500" />,
  }
]

export const tipoDietasInfo = [
  {
    nombre: "Sin restricciones",
    descripcion: "Esta dieta está diseñada especialmente para quienes quieren disfrutar de una variedad de alimentos sin las limitaciones de las dietas tradicionales. Aquí, lo que importa es el equilibrio, la moderación y el placer de comer.",
    icon: <CircleCheckBig color="#d55858" className="w-12 h-12 text-500" />,
  },
  {
    nombre: "Celiaco",
    descripcion: "Esta dieta está diseñada para evitar el gluten, una proteína que se encuentra en el trigo, la cebada y el centeno. Las personas con enfermedad celíaca deben seguir esta dieta para prevenir reacciones adversas en el intestino.",
    icon: <WheatOff color="#e2bf60" className="w-12 h-12 text-500" />,
  },
  {
    nombre: "Vegetariano",
    descripcion: "¡Descubre una dieta diseñada especialmente para quienes buscan un estilo de vida saludable y respetuoso con el medio ambiente! La dieta vegetariana es una forma deliciosa y nutritiva de alimentarte, eliminando la carne y el pescado y enfocándose en una amplia variedad de alimentos de origen vegetal.",
    icon: <Vegan color="#77d963" className="w-12 h-12 text-500" />,
  }
]