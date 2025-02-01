"use client";

import { CircleUserRound, Dumbbell, Salad, SquareChartGantt, Utensils } from "lucide-react";
import { useStateContext } from "@/components/stateContext";

export default function Options() {
  const { sharedOpcion, setSharedOpcion } = useStateContext();

  const handleOpcionChange = (nuevaOpcion) => {
    setSharedOpcion(nuevaOpcion);
  };

  return (
      <div className="flex-shrink-0 p-4">
        <ul className="space-y-3 flex flex-col justify-center items-center md:justify-start md:items-start">
          <li>
            <button
              onClick={() => handleOpcionChange('Usuarios')}
              className={`block flex items-center text-left text-gray-700 pl-2 pr-3 py-1 gap-[10px] hover:bg-[linear-gradient(315deg,_rgba(253,29,29,0.75)_25%,_rgba(253,99,36,0.75)_50%,_rgba(253,87,31,0.75)_60%,_rgba(253,81,29,0.75)_62%,_rgba(253,67,29,0.75)_75%,_rgba(253,47,29,0.75)_87%,_rgba(253,29,29,0.75)_100%)] hover:text-white hover:font-bold hover:shadow-md transition-colors duration-300 rounded-lg ${sharedOpcion==='Usuarios' ? "bg-[linear-gradient(315deg,_rgba(253,29,29,0.6)_25%,_rgba(253,99,36,0.6)_50%,_rgba(253,87,31,0.6)_60%,_rgba(253,81,29,0.6)_62%,_rgba(253,67,29,0.6)_75%,_rgba(253,47,29,0.6)_87%,_rgba(253,29,29,0.6)_100%)] text-white shadow-md" : ""}`}
            >
              <CircleUserRound className="inline"/> Usuarios
            </button>
          </li>
          <li>
            <button
              onClick={() => handleOpcionChange('Rutinas')}
              className={`block flex items-center text-left text-gray-700 pl-2 pr-3 py-1 gap-[10px] hover:bg-[linear-gradient(315deg,_rgba(253,29,29,0.75)_25%,_rgba(253,99,36,0.75)_50%,_rgba(253,87,31,0.75)_60%,_rgba(253,81,29,0.75)_62%,_rgba(253,67,29,0.75)_75%,_rgba(253,47,29,0.75)_87%,_rgba(253,29,29,0.75)_100%)] hover:text-white hover:font-bold hover:shadow-md transition-colors duration-300 rounded-lg ${sharedOpcion==='Rutinas' ? "bg-[linear-gradient(315deg,_rgba(253,29,29,0.6)_25%,_rgba(253,99,36,0.6)_50%,_rgba(253,87,31,0.6)_60%,_rgba(253,81,29,0.6)_62%,_rgba(253,67,29,0.6)_75%,_rgba(253,47,29,0.6)_87%,_rgba(253,29,29,0.6)_100%)] text-white shadow-md" : ""}`}
            >
              <SquareChartGantt className="inline"/> Rutinas
            </button>
          </li>
          <li>
            <button
              onClick={() => handleOpcionChange('Ejercicios')}
              className={`block flex items-center text-left text-gray-700 pl-2 pr-3 py-1 gap-[10px] hover:bg-[linear-gradient(315deg,_rgba(253,29,29,0.75)_25%,_rgba(253,99,36,0.75)_50%,_rgba(253,87,31,0.75)_60%,_rgba(253,81,29,0.75)_62%,_rgba(253,67,29,0.75)_75%,_rgba(253,47,29,0.75)_87%,_rgba(253,29,29,0.75)_100%)] hover:text-white hover:font-bold hover:shadow-md transition-colors duration-300 rounded-lg ${sharedOpcion==='Ejercicios' ? "bg-[linear-gradient(315deg,_rgba(253,29,29,0.6)_25%,_rgba(253,99,36,0.6)_50%,_rgba(253,87,31,0.6)_60%,_rgba(253,81,29,0.6)_62%,_rgba(253,67,29,0.6)_75%,_rgba(253,47,29,0.6)_87%,_rgba(253,29,29,0.6)_100%)] text-white shadow-md" : ""}`}
            >
              <Dumbbell className="inline"/> Ejercicios
            </button>
          </li>
          <li>
            <button
              onClick={() => handleOpcionChange('Planes Alimenticios')}
              className={`block flex items-center text-left text-gray-700 pl-2 pr-3 py-1 gap-[10px] hover:bg-[linear-gradient(315deg,_rgba(253,29,29,0.75)_25%,_rgba(253,99,36,0.75)_50%,_rgba(253,87,31,0.75)_60%,_rgba(253,81,29,0.75)_62%,_rgba(253,67,29,0.75)_75%,_rgba(253,47,29,0.75)_87%,_rgba(253,29,29,0.75)_100%)] hover:text-white hover:font-bold hover:shadow-md transition-colors duration-300 rounded-lg ${sharedOpcion==='Planes Alimenticios' ? "bg-[linear-gradient(315deg,_rgba(253,29,29,0.6)_25%,_rgba(253,99,36,0.6)_50%,_rgba(253,87,31,0.6)_60%,_rgba(253,81,29,0.6)_62%,_rgba(253,67,29,0.6)_75%,_rgba(253,47,29,0.6)_87%,_rgba(253,29,29,0.6)_100%)] text-white shadow-md" : ""}`}
            >
              <Salad className="inline" /> Planes Alimenticios
            </button>
          </li>
          <li>
            <button
              onClick={() => handleOpcionChange('Platillos')}
              className={`block flex items-center text-left text-gray-700 pl-2 pr-3 py-1 gap-[10px] hover:bg-[linear-gradient(315deg,_rgba(253,29,29,0.75)_25%,_rgba(253,99,36,0.75)_50%,_rgba(253,87,31,0.75)_60%,_rgba(253,81,29,0.75)_62%,_rgba(253,67,29,0.75)_75%,_rgba(253,47,29,0.75)_87%,_rgba(253,29,29,0.75)_100%)] hover:text-white hover:font-bold hover:shadow-md transition-colors duration-300 rounded-lg ${sharedOpcion==='Platillos' ? "bg-[linear-gradient(315deg,_rgba(253,29,29,0.6)_25%,_rgba(253,99,36,0.6)_50%,_rgba(253,87,31,0.6)_60%,_rgba(253,81,29,0.6)_62%,_rgba(253,67,29,0.6)_75%,_rgba(253,47,29,0.6)_87%,_rgba(253,29,29,0.6)_100%)] text-white shadow-md" : ""}`}
            >
              <Utensils className="inline" /> Platillos
            </button>
          </li>
        </ul>
      </div>
  );
}
