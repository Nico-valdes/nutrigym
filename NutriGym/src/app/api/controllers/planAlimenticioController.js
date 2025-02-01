const { get } = require('http');
const {
    obtenerPorId,
    obtenerPorNombre,
    obtenerTodos,
    obtenerTodosPorNombreConPalabra,
    crear,
    actualizar,
    eliminar
} = require('../services/planAlimenticioService');

//_________Obtener un plan alimenticio por su ID_______________________________
const getById = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const planAlimenticio = await obtenerPorId(id);
    
        if (!planAlimenticio) {
            return res.status(404).json({ message: 'No se ha podido encontrar el plan alimenticio.' });
        }
    
        res.status(200).json(planAlimenticio);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al recuperar el plan alimenticio:', error });
    }
};


//_________Obtener una rutina por su nombre_______________________________
const getByNombre = async (req, res) => {
    const { nombre } = req.params;

    if (!nombre) return res.status(500).json({ message: 'Debe ingresar un nombre por parámetro.' });
    
    try {
        const planAlimenticio = await obtenerPorNombre(nombre);
    
        if (!planAlimenticio) {
            return res.status(404).json({ message: 'No se ha podido encontrar el plan alimenticio.' });
        }
        return res.status(200).json(planAlimenticio);
    } catch (error) {
        throw new Error(error);
    }
};


//_________Obtener todos los planes alimenticios__________________________________
const getAll = async (req, res) => {
    try {
        const planesAlimenticios = await obtenerTodos();
    
        if (planesAlimenticios.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado planes alimenticios.' });
        }

        res.status(200).json(planesAlimenticios);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener los planes alimenticios:', error });
    }
};


//_________Obtener todos por nombre con una palabra determinada__________________________________
const getAllByNombreWithPalabra = async (req, res) => {
    const { palabra } = req.params;

    if (!palabra) {
        return res.status(400).json({ message: 'El parámetro palabra es requerido.' });
    }

    try {
        const planesAlimenticios = await obtenerTodosPorNombreConPalabra(palabra);

        if (planesAlimenticios.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado planes alimenticios.' });
        }

        res.status(200).json(planesAlimenticios);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener los planes alimenticios.', error: error.message });
    }
};


//_________Crear un plan alimenticio_____________________________________
const create = async (req, res) => {
    try {
        const planAlimenticio = await crear(req.body);
        
        res.status(201).json(planAlimenticio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//_________Actualizar datos de un plan alimenticio_____________________________
const update = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = await actualizar(id, req.body);

        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido actualizar los datos del plan alimenticio.' });
        }

        res.status(200).json({ message: 'Plan alimenticio actualizado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al actualizar los datos del plan alimenticio:', error });
    }
};

//_________Eliminar un plan alimenticio________________________________________
const destroy = async (req, res) => {
    const { id } = req.params;
    
    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = await eliminar(id);

        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido encontrar el plan alimenticio.' });
        }

        res.status(200).json({ message: 'Plan alimenticio eliminado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al eliminar el plan alimenticio:', error });
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