const {
    obtenerPorId,
    obtenerTodos,
    obtenerTodosEjerciciosPorIdRutina,
    obtenerTodosPorIdRutina,
    crear,
    actualizar,
    eliminar
} = require('../services/rutinaTieneEjerciciosService');


//_________Obtener una rutina tiene ejercicios por su ID_______________________________
const getById = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });
    
    try {
        const rutinaTieneEjercicios = await obtenerPorId(id);
    
        if (!rutinaTieneEjercicios) {
            return res.status(404).json({ message: 'No se ha podido encontrar la rutina tiene ejercicios.' });
        }
    
        res.status(200).json(rutinaTieneEjercicios);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al recuperar la rutina tiene ejercicios:', error });
    }
};

//_________Obtener todas las rutinas tienen ejercicios______________________________
const getAll = async (req, res) => {
    try {
        const rutinasTienenEjercicios = await obtenerTodos();

        res.status(200).json(rutinasTienenEjercicios);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener las rutinas tienen ejercicios:', error });
    }
};

//_________Obtener todos los ejercicios por el ID de rutina__________________________________
const getAllEjerciciosByIdRutina = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const ejercicios = await obtenerTodosEjerciciosPorIdRutina(id);

        if (ejercicios.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado ejercicios para la rutina proporcionada.' });
        }

        res.status(200).json(ejercicios);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener los ejercicios de la rutina:', error });
    }
};


//_________Obtener todas rutinas tienen ejercicios__________________________________
const getAllByIdRutina = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const rutinasTienenEjercicios = await obtenerTodosPorIdRutina(id);
    
        if (rutinasTienenEjercicios.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado ejercicios para la rutina proporcionada.' });
        }

        res.status(200).json(rutinasTienenEjercicios);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener los ejercicios de la rutina:', error });
    }
};


//_________Crear una rutina tiene ejercicios_____________________________________
const create = async (req, res) => {
    try {
        const rutinaTieneEjercicios = await crear(req.body);

        res.status(201).json(rutinaTieneEjercicios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//_________Actualizar datos de una rutina tiene ejercicios_____________________________
const update = async (req, res) => {
    const { id } = req.params;
    
    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = await actualizar(id, req.body);

        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido actualizar los datos de la rutina tiene ejercicios.' });
        }

        res.status(200).json({ message: 'Rutina tiene ejercicios actualizada con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al actualizar los datos de la rutina tiene ejercicios:', error });
    }
};

//_________Eliminar una rutina tiene ejercicios________________________________________
const destroy = async (req, res) => {
    const { id } = req.params;
    
    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = await eliminar(id);

        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido encontrar la rutina tiene ejercicios.' });
        }

        res.status(200).json({ message: 'Rutina tiene ejercicios eliminada con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al eliminar la rutina tiene ejercicios:', error });
    }
};

module.exports = {
    getById,
    getAll,
    getAllEjerciciosByIdRutina,
    getAllByIdRutina,
    create,
    update,
    destroy
};