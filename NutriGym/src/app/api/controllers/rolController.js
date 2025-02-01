const {
    obtenerPorId,
    obtenerTodos,
    crear,
    actualizar,
    eliminar
} = require('../services/rolService');


//_________Obtener un rol por su ID_______________________________
const getById = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const rol = await obtenerPorId(id);
    
        if (!rol) {
            return res.status(404).json({ message: 'No se ha podido encontrar el rol.' });
        }
    
        res.status(200).json(rol);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al recuperar el rol:', error });
    }
};


//_________Obtener todos roles__________________________________
const getAll = async (req, res) => {
    try {
        const roles = await obtenerTodos();
    
        if (roles.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado roles.' });
        }

        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener los roles:', error });
    }
};


//_________Crear un rol_____________________________________
const create = async (req, res) => {
    try {
        const rol = await crear(req.body);

        res.status(201).json(rol);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//_________Actualizar datos de un rol_____________________________
const update = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = await actualizar(id, req.body)
        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido actualizar los datos del rol.' });
        }

        res.status(200).json({ message: 'Rol actualizado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al actualizar los datos del rol:', error });
    }
};


//_________Eliminar un rol________________________________________
const destroy = async (req, res) => {
    const { id } = req.params;
    
    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = await eliminar(id);

        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido encontrar el rol.' });
        }

        res.status(200).json({ message: 'Rol eliminado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al eliminar el rol:', error });
    }
};

module.exports = {
    getById,
    getAll,
    create,
    update,
    destroy
};