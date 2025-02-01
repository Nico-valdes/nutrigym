const {
    obtenerPorId,
    obtenerPorNombre,
    obtenerTodos,
    obtenerTodosPorNombreConPalabra,
    crear,
    actualizar,
    eliminar
} = require('../services/rutinaService');


//_________Obtener una rutina por su id________________________________
const getById = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const rutina = await obtenerPorId(id);

        res.status(200).json(rutina);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener la rutina:', error });
    }
};


//_________Obtener una rutina por su nombre_______________________________
const getByNombre = async (req, res) => {
    const { nombre } = req.params;

    if (!nombre) return res.status(500).json({ message: 'Debe ingresar un nombre por parámetro.' });

    try {
        const rutina = await obtenerPorNombre(nombre);
    
        if (!rutina) {
            return res.status(404).json({ message: 'No se ha podido encontrar la rutina.' });
        }

        res.status(200).json(rutina);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener la rutina:', error });
    }
};


//_________Obtener todas rutinas__________________________________
const getAll = async (req, res) => {
    try {
        const rutinas = await obtenerTodos();
    
        if (rutinas.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado rutinas.' });
        }

        res.status(200).json(rutinas);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener las rutinas:', error });
    }
};


//_________Obtener todos por nombre con una palabra determinada__________________________________
const getAllByNombreWithPalabra = async (req, res) => {
    const { palabra } = req.params;

    if (!palabra) return res.status(500).json({ message: 'Debe ingresar una palabra por parámetro.' });

    try {
        const rutinas = await obtenerTodosPorNombreConPalabra(palabra);

        if (rutinas.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado rutinas.' });
        }

        res.status(200).json(rutinas);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener las rutinas.', error: error.message });
    }

};


//_________Crear una rutina_____________________________________
const create = async (req, res) => {
    try {
        const rutina = await crear(req.body);

        res.status(201).json(rutina);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//_________Actualizar datos de una rutina_____________________________
const update = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = await actualizar(id, req.body);

        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido actualizar los datos de la rutina.' });
        }

        res.status(200).json({ message: 'Rutina actualizada con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al actualizar los datos de la rutina:', error });
    }
};


//_________Eliminar una rutina________________________________________
const destroy = async (req, res) => {
    const { id } = req.params;
    
    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = await eliminar(id);

        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido encontrar la rutina.' });
        }

        res.status(200).json({ message: 'Rutina eliminada con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al eliminar la rutina.', error: error.message });
    }
};

module.exports = {
    getById,
    getByNombre,
    getAll,
    getAllByNombreWithPalabra,
    create,
    update,
    destroy
};
