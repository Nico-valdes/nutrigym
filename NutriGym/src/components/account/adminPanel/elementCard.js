'use client'
import { motion } from 'framer-motion';
import { CircleUserRound, Dumbbell, Salad, Trash2, PencilLine, SquareChartGantt, Utensils } from "lucide-react";
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation"

export default function ElementCard ({ elemento, index, tipoElemento, urlBusqueda, onEliminar }) {
    const router = useRouter();
    const routes = {
        "Usuarios": "/cuenta/admin-panel/editar-usuario",
        "Rutinas": "/cuenta/admin-panel/editar-rutina",
        "Planes Alimenticios": "/cuenta/admin-panel/editar-plan-alimenticio",
        "Ejercicios": "/cuenta/admin-panel/editar-ejercicio",
        "Platillos": "/cuenta/admin-panel/editar-platillo"
    };

    const emitirAviso = () => {
        Swal.fire({
            title: '¡Aviso!',
            text: '¿Estás seguro que deseas eliminar el elemento?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
                if (result.isConfirmed) {
                    eliminarElemento ();
                }
        })
    };

    const eliminarElemento = async () => {
        const response = await fetch(`http://localhost:3001/${urlBusqueda}/eliminar/${elemento.id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            onEliminar();
          } else {
            console.log ("Error:", response.error);
          }
    }

    const handleEdit = () => {
        const urlEdit = `${routes[tipoElemento]}/${elemento.id}`;

        router.push(urlEdit);
    };

    return (
        <>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
                <div className="p-6 px-10 text-center flex flex-col items-center justify-between h-full">
                    

                    {tipoElemento === 'Usuarios' && (
                        <>
                            <CircleUserRound className="mb-6" size={46} />
                            <h3 className="text-2xl font-bold pb-3"> {elemento.nombre} {elemento.apellido}</h3>
                            <h6 className=""> {elemento.idRol === 1? 'Administrador' : 'Cliente'}</h6>
                            <h6 className=""> {elemento.email}</h6>
                        </>
                    )}

                    {(tipoElemento === 'Rutinas' || tipoElemento === 'Planes Alimenticios') && (
                        
                        <>
                            {tipoElemento === 'Rutinas' && (
                                <SquareChartGantt className="mb-6" size={46} />
                            )}
                            {tipoElemento === 'Planes Alimenticios' && (
                                <Salad className="mb-6" size={46} />
                            )}
                            
                            <h3 className="text-2xl font-bold pb-3">{elemento.nombre}</h3>
                            <p className="text-gray-600 mb-4">{elemento.descripcion}</p>
                        </>
                    )}

                    {tipoElemento === 'Ejercicios' && (
                        <>
                            <Dumbbell className="mb-6" size={46} />
                            <h3 className="text-2xl font-bold pb-3">{elemento.nombre}</h3>
                            <h6>{elemento.descripcion}</h6>
                            <h6>{elemento.link}</h6>

                            <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 gap-x-12">
                                <div>
                                    <h6>Musculo afectado</h6>
                                    <h6 className="text-gray-500">{elemento.musculoAfectado}</h6>
                                </div>
                                <div className="">
                                    <h6>Tipo de ejercicio</h6>
                                    <h6 className="text-gray-500">{elemento.divisionRutina}</h6>
                                </div>
                                <div>
                                    <h6>Series</h6>
                                    <h6 className="text-gray-500">{elemento.cantidadSeriesRecomendadas}</h6>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h6>{elemento.cantidadRepeticionesRecomendadas !== null
                                        ? "Repeticiones"
                                        : "Duración"}
                                    </h6>
                                    <h6 className="text-gray-500">{elemento.cantidadRepeticionesRecomendadas}{elemento.duracion}</h6>
                                </div>                                
                            </div>
                        </>
                    )}

                    {tipoElemento === 'Platillos' && (
                        <>
                            <Utensils className="mb-6" size={46} />
                            <h3 className="text-2xl font-bold pb-3">{elemento.nombre}</h3>
                            <h6 className="capitalize">{elemento.turno}</h6>
                        </>
                    )}

                    <div className='mt-7 mb-4 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-7'>
                        <button 
                            title="Eliminar"
                            onClick={() => emitirAviso()}
                            className='flex items-center justify-center gap-2 w-40 shadow-md py-2 px-3 bg-[#FF5252] rounded-md text-white hover:bg-[#E25252]'
                        >
                            <Trash2 size={20} className='inline'/> Eliminar
                        </button>
                        <button 
                            onClick={() => handleEdit()}
                            title="Editar"
                            className='flex items-center justify-center gap-2 w-40 shadow-md py-2 bg-[#52BCE8] rounded-md text-white hover:bg-[#52ACD8]'
                        >
                            <PencilLine size={20} className='inline'/> Editar
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}