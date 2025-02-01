"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch(searchTerm);
      setSearchTerm("");
    }
  };

  return (
    <div className="w-full flex justify-center mb-4">
      <div className="relative w-full">
        <input
          type="text"
          className="w-full backdrop-blur-sm bg-[#FFF] py-2 pl-10 pr-4 rounded-lg hover:shadow-lg focus:outline-none border-2 focus:border-[#F42F00] transition-colors duration-300"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={22} />
        </div>
      </div>
    </div>
  );
}
