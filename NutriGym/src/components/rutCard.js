'use client'
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';


export default function RutCard ({ titulo, descripcion, icon }) {
    const router = useRouter();

    return (
        <>
            <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-between bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg text-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[280px] h-[250px] p-6 cursor-pointer"
            >
            <div className="flex flex-col items-center text-center" onClick={() => router.push(`/verRutina`)}>
                <div className="bg-primary rounded-full p-3 mb-4">
                {icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{titulo}</h3>
            </div>
            <p className="text-sm text-gray-300 text-center">{descripcion}</p>
            </motion.div>
        </>
    )
}