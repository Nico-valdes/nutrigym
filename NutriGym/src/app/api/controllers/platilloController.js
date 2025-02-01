const {
    obtenerPorId,
    obtenerTodos,
    obtenerTodosPorNombreConPalabra,
    crear,
    actualizar,
    eliminar
} = require('../services/platilloService');


//_________OObtener un platillo por su ID_______________________________
const getById = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const comida = await obtenerPorId(id);
    
        if (!comida) {
            return res.status(404).json({ message: 'No se ha podido encontrar la comida.' });
        }
    
        res.status(200).json(comida);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al recuperar la comida:', error });
    }
};


//_________Obtener todos los platillos__________________________________
const getAll = async (req, res) => {
    try {
        const comidas = await obtenerTodos();
    
        if (comidas.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado comidas.' });
        }

        res.status(200).json(comidas);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener las comidas:', error });
    }
};

//_________Obtener todos por nombre con una palabra determinada__________________________________
const getAllByNombreWithPalabra = async (req, res) => {
    const { palabra } = req.params;

    if (!palabra) return res.status(500).json({ message: 'Debe ingresar una palabra por parámetro.' });

    try {
        const platillos = await obtenerTodosPorNombreConPalabra(palabra);

        if (platillos.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado platillos.' });
        }

        res.status(200).json(platillos);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener los platillos.', error: error.message });
    }

};

//_________Crear un nuevo platillo_____________________________________
const create = async (req, res) => {
    try {
        const platillo = await crear(req.body);

        res.status(201).json(platillo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//_________Actualizar datos de un platillo_____________________________
const update = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = actualizar(id, req.body)

        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido actualizar los datos de la comida.' });
        }

        res.status(200).json({ message: 'Comida actualizada con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al actualizar los datos de la comida:', error });
    }
};


//_________Eliminar un platillo________________________________________
const destroy = async (req, res) => {
    const { id } = req.params;
    
    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = await eliminar(id);

        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido encontrar la comida.' });
        }

        res.status(200).json({ message: 'Comida eliminada con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al eliminar la comida:', error });
    }
};

module.exports = {
    getById,
    getAll,
    getAllByNombreWithPalabra,
    create,
    update,
    destroy
};