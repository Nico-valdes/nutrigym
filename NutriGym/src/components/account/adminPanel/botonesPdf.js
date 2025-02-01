import { useState, useEffect } from "react";
import { File } from 'lucide-react'

export default function BotonesPdf({ pdfs, defaultId, onPdfSelect }) {
  const [selectedId, setSelectedId] = useState(defaultId);

  const handleSelect = (pdfId) => {
    setSelectedId(pdfId);
    onPdfSelect(pdfId);
  };

  useEffect(() => {
      setSelectedId(defaultId);
    }, [defaultId]);

  return (
    <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 rounded-md border-2 border-[#D2D2D255]">
      {pdfs.map((pdf, index) => {
        const isSelected = selectedId === pdf.id;

        return (
          <button
            type="button"
            onClick={() => handleSelect(pdf.id)}
            key={index}
            className={`flex flex-col items-center justify-center border py-2 rounded-md space-y-2
              ${isSelected ? "bg-[#E5F2E8] border-[#65AB76] border-2 shadow-md" : "hover:bg-[#ACACAC55]"}`}
          >
            <File size={36} className={`${isSelected ? "text-[#65AB76]" : "text-[#acacac] group-hover:text-white"}`} />
            <h4 className={`text-xsm ${isSelected ? "text-[#65AB76] font-bold" : "text-gray-400 group-hover:text-white"}`}>
              #{pdf.id}
            </h4>
          </button>
        );
      })}
    </div>
  );
}
