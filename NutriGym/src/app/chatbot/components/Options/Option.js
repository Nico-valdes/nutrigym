import React from "react";
import { useRouter } from "next/navigation.js"

const Options = (props) => {
  
  const handleClick = (url) => {
    window.location.href = url;
   };

  const options = [
    {
      text: "Obtener una dieta",handler:() => handleClick("/dietas"),id: 1,
    },
    { text: "Obtener un rutina", handler: () => {handleClick("/rutinas")}, id: 2 },
    { text: "Crear un plan personalizado", handler: () => {handleClick("/crear-plan")}, id: 3 },
    {text:"Contactar un kinesiólogo",
        handler: () => {console.log('KINESIOLOGO')},
        id: 4,
    }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="text-[13px] m-[5px] rounded-[12px] py-[6px] px-[8px] border-2 border-[#a2a2a275] bg-[#e2e2e2] text-center hover:bg-[#d2d2d2] hover:border-[#929292]">
      {option.text}
    </button>
  ));

  return <div className="flex flex-col items-end">{buttonsMarkup}</div>;
};

export default Options;
