const {
    obtenerPorId,
    obtenerTodos,
    crear,
    actualizar,
    eliminar,
    obtenerTodosPorNombreConPalabra
} = require('../services/ejercicioService.js') 

//_________Obtener un ejercicio por su ID_______________________________
const getById = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const ejercicio = await obtenerPorId(id);
    
        if (!ejercicio) {
            return res.status(404).json({ message: 'No se ha podido encontrar al ejercicio.' });
        }
    
        res.status(200).json(ejercicio);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al recuperar el ejercicio:', error });
    }
};

//_________Obtener todos por nombre con una palabra determinada__________________________________
const getAllByPalabra = async (req, res) => {
    const { palabra } = req.params;

    if (!palabra) {
        return res.status(400).json({ message: 'El parámetro palabra es requerido.' });
    }

    try {
        const ejercicios = await obtenerTodosPorNombreConPalabra(palabra);

        if (ejercicios.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado ejercicios.' });
        }

        res.status(200).json(ejercicios);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener los ejercicios.', error: error.message });
    }

};


//_________Obtener todos los ejercicios__________________________________
const getAll = async (req, res) => {
    try {
        const ejercicios = await obtenerTodos();
    
        if (ejercicios.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado ejercicios.' });
        }

        res.status(200).json(ejercicios);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener los ejercicios:', error });
    }
};


//_________Crear un nuevo ejercicio_____________________________________
const create = async (req, res) => {
    try {
        const ejercicio = await crear(req.body);

        res.status(201).json({
            message: 'Ejercicio creado con éxito.',
            ejercicio,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Se produjo un error al crear el ejercicio.',
            error: error.message,
        });
    }
};


//_________Actualizar datos de un ejercicio_____________________________

const update = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'Debe ingresar un id por parámetro.' });
    }

    const {
        nombre,
        descripcion,
        link,
        cantidadRepeticionesRecomendadas,
        duracion,
        cantidadSeriesRecomendadas,
        musculoAfectado,
        divisionRutina,
    } = req.body;

    try {
        const actualizado = await actualizar(id, {
            nombre,
            descripcion,
            link,
            cantidadRepeticionesRecomendadas,
            duracion,
            cantidadSeriesRecomendadas,
            musculoAfectado,
            divisionRutina,
        });

        if (!actualizado) {
            return res.status(404).json({ message: 'No se ha encontrado el ejercicio o no se pudo actualizar.' });
        }

        res.status(200).json({
            message: 'Ejercicio actualizado con éxito.',
            ejercicio: actualizado,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Se ha producido un error al actualizar los datos del ejercicio.',
            error: error.message,
        });
    }
};



//_________Eliminar un ejercicio________________________________________
const destroy = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = await eliminar(id);

        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha encontrado el ejercicio.' });
        }

        res.status(200).json({ message: 'Ejercicio eliminado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al eliminar el ejercicio.', error: error.message });
    }
};

module.exports = {
    getById,
    getAll,
    getAllByPalabra,
    create,
    update,
    destroy
};