'use client'
import { ChevronRight } from "lucide-react"


export default function Card ({ title, description, icon, handleClick }) {
    return (
        <>
            <div 
            className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            onClick={handleClick}
            >
                <div className="flex items-center mb-4">
                    {icon}
                    <h3 className="text-xl font-semibold ml-3">{title}</h3>
                </div>
                <p className="text-gray-600">{description}</p>
                <div className="mt-4 flex justify-end">
                    <ChevronRight className="text-primary" />
                </div>
        </div>
    </>
    )
}