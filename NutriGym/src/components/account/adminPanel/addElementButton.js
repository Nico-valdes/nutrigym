import Link from 'next/link';
import { Plus } from "lucide-react"

const routes = {
    "Usuarios": "/cuenta/admin-panel/crear-usuario",
    "Rutinas": "/cuenta/admin-panel/crear-rutina",
    "Planes Alimenticios": "/cuenta/admin-panel/crear-plan-alimenticio",
    "Ejercicios": "/cuenta/admin-panel/crear-ejercicio",
    "Platillos": "/cuenta/admin-panel/crear-platillo"
};

function AddElementButton({ opcion }) {
    const href = routes[opcion] || "#"; 
    
    return (
        <Link href={href} title="Agregar" className='flex items-center bg-[#FFF] shadow-md justify-center w-10 h-10 border-2 rounded-md hover:bg-[#F9F9F9] hover:shadow-lg'>
            <Plus size={20} />
        </Link>
    );
}

export default AddElementButton;
