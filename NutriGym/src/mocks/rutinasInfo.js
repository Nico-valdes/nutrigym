import { BicepsFlexed, ArrowDownNarrowWide, Dna, Flame, ChartNoAxesCombined } from 'lucide-react'
    
    const rutinasInfo = [
      {
        titulo: "Hipertrofia",
        descripcion: "Rutina ideal para la ganancia de músculo y aumento de peso.",
        icon: <BicepsFlexed size={24} />
      },
      {
        titulo: "Recomposición",
        descripcion: "Diseñada para mantener tu peso, ganar músculo y perder grasa.",
        icon: <Dna size={24} />
      },
      {
        titulo: "Definición",
        descripcion: "Rutina diseñada para perder grasa corporal y mantener músculo.",
        icon: <Flame size={24} />
      },
      {
        titulo: "Adaptación",
        descripcion: "Si no has estado entrenado musculación últimamente, es tu rutina.",
        icon: <ChartNoAxesCombined size={24} />
      },
      {
        titulo: "Pérdida de peso",
        descripcion: "Esta es una rutina poco recomendada, perderás peso y perderás músculo.",
        icon: <ArrowDownNarrowWide size={24} />
      }
    ];

export default rutinasInfo;