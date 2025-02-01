const {
    obtenerPorId,
    obtenerTodos,
    obtenerTodosPorIdPlanAlimenticio,
    obtenerTodosPlatillosPorIdPlanAlimenticio,
    crear,
    actualizar,
    eliminar
} = require('../services/planAlimenticioTienePlatillosService');


//_________Obtener un plan alimenticio tiene comidas por su ID_______________________________
const getById = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const planAlimenticioTienePlatillos = await obtenerPorId(id);
    
        if (!planAlimenticioTienePlatillos) {
            return res.status(404).json({ message: 'No se ha podido encontrar el plan alimenticio tiene comidas.' });
        }
    
        res.status(200).json(planAlimenticioTienePlatillos);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al recuperar el plan alimenticio tiene comidas:', error });
    }
};


//_________Obtener todos los planes alimenticios tienen comidas__________________________________
const getAll = async (req, res) => {
    try {
        const planesAlimenticiosTienePlatillos = await obtenerTodos();
    
        if (planesAlimenticiosTienePlatillos.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado planes alimenticios tienen comidas.' });
        }

        res.status(200).json(planesAlimenticiosTienenComidas);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener los planes alimenticios tienen comidas:', error });
    }
};


//_________Obtener todos por ID de plan alimenticio__________________________________
const getAllByIdPlanAlimenticio = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const planesAlimenticiosTienePlatillos = await obtenerTodosPorIdPlanAlimenticio(id);
    
        if (planesAlimenticiosTienePlatillos.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado platillos para el plan alimenticio.' });
        }

        res.status(200).json(planesAlimenticiosTienePlatillos);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener los platillos del plan alimenticio:', error });
    }
};


//_________Obtener todas por ID__________________________________
const getAllPlatillosByIdPlanAlimenticio = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const platillos = await obtenerTodosPlatillosPorIdPlanAlimenticio(id);

        res.status(200).json(platillos);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener los platillos del plan alimenticio:', error });
    }
};


//_________Crear un plan alimenticio tiene comidas_____________________________________
const create = async (req, res) => {
    const { idPlanAlimenticio, idPlatillo } = req.body;
    try {
        const planAlimenticioTienePlatillos = await crear(idPlanAlimenticio, idPlatillo);

        res.status(201).json(planAlimenticioTienePlatillos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//_________Actualizar datos de un plan alimenticio tiene comidas_____________________________
const update = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = await actualizar(id, req.body);


        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido actualizar los datos del plan alimenticio tiene comidas.'});
        }

        res.status(200).json({ message: 'Plan alimenticio tiene comidas actualizado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al actualizar los datos del plan alimenticio tiene comidas:', error });
    }
};

//_________Eliminar un plan alimenticio tiene comidas________________________________________
const destroy = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });
    
    try {
        const resultado = await eliminar(id);

        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido encontrar el plan alimenticio tiene comidas.' });
        }

        res.status(200).json({ message: 'Plan alimenticio tiene comidas eliminado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al eliminar el plan alimenticio tiene comidas:', error });
    }
};

module.exports =  {
    getById,
    getAll,
    getAllByIdPlanAlimenticio,
    getAllPlatillosByIdPlanAlimenticio,
    create,
    update,
    destroy
};
