'use client'
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';


export default function DietCard ({ dieta, index }) {
    const router = useRouter();

    return (
        <>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
                <div className="flex flex-col items-center text-center" onClick={() => router.push(`/verDieta`)}>
                </div>
                <div className="p-6">
                    <div className="flex items-center mb-4">
                        {dieta.icon}
                        <h2 className="text-2xl font-bold ml-4">{dieta.nombre}</h2>
                    </div>
                    <p className="text-gray-600 mb-4">{dieta.descripcion}</p>

                    {dieta.principiosBasicos && dieta.principiosBasicos.length > 0 && (
                        <>
                            <h3 className="font-semibold text-lg mb-2">Principios básicos:</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                {dieta.principiosBasicos.map((principiosBasicos, index) => (
                                    <li key={index}>{principiosBasicos}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </motion.div>
        </>
    )
}