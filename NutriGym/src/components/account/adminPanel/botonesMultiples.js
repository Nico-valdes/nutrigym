import { useState, useEffect } from "react";
import { Dumbbell, Utensils, X, Check } from 'lucide-react';

export default function BotonesMultiples({ elementos, defaultIds, tipoElementos, onEjerciciosSelected, onGuardar }) {
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    setSelectedIds(defaultIds);
  }, [defaultIds]);

  const toggleSelection = (id) => {
    setSelectedIds((prevSelectedIds) => {
      const newSelectedIds = prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id];

      
      return newSelectedIds;
    });
  };

  const handleGuardarClick = () => {
    if (onGuardar) {
      onGuardar(selectedIds); // Llama a la función de guardado del componente padre
      document.getElementById('my_modal_4').close()
    }
  };

  return (
    <div >
      <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 rounded-md border-2 border-[#D2D2D255]">
        {elementos.map((elemento, index) => {
          const isSelected = selectedIds.includes(elemento.id);

          return (
            <button
              type="button"
              title={elemento.nombre}
              onClick={() => toggleSelection(elemento.id)}
              key={index}
              className={`flex flex-col items-center justify-center border py-2 rounded-md space-y-2
                ${isSelected ? "bg-[#72BCE855] border-[#85C5D2] border-2 shadow-md" : "hover:bg-[#ACACAC55]"}`}
            >
              {tipoElementos === 'Ejercicios' && (
                <Dumbbell size={36} className={`${isSelected ? "text-[#85B2C5]" : "text-[#acacac]"}`} />
              )}

              {tipoElementos === 'Platillos' && (
                <Utensils size={36} className={`${isSelected ? "text-[#85B2C5]" : "text-[#acacac]"}`} />
              )}

              <h4 className={`text-xsm ${isSelected ? "text-[#85B2C5] font-bold" : "text-gray-400"}`}>
                #{elemento.id}
              </h4>
            </button>
          );
        })}
      </div>
      {/* Botón de guardar */}
      <div className="p-2 flex justify-center gap-24 mt-12">
        <div className="modal-action">
          <button
            type="button"
            title="Cerrar"
            onClick={() => document.getElementById('my_modal_4').close()}
            className="w-40 shadow-md py-2 px-3 bg-[#FF5252] rounded-md text-white hover:bg-[#E25252] flex items-center justify-center"
          >
            <X size={20} className="inline-block" /> Cancelar
          </button>
        </div>
        <button
          type="button"
          onClick={handleGuardarClick}
          className="w-40 shadow-md py-2 px-3 bg-[#52D852] rounded-md text-white hover:bg-[#52C852] flex items-center justify-center"
        >
          <Check size={20} className="inline-block" /> Guardar
        </button>
      </div>

    </div>
  );
}
