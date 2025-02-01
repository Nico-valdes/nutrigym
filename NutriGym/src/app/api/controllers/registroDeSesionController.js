const {
    obtenerPorId,
    obtenerTodos,
    crear,
    actualizar,
    eliminar
} = require('../services/registroDeSesionService');


//_________Obtener un registro de sesion por su ID_______________________________
const getById = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const registroDeSesion = await obtenerPorId(id);
    
        if (!registroDeSesion) {
            return res.status(404).json({ message: 'No se ha podido encontrar el resgistro de sesion.' });
        }
    
        res.status(200).json(registroDeSesion);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al recuperar el registro de sesion:', error });
    }
};


//_________Obtener todos registros de sesion__________________________________
const getAll = async (req, res) => {
    try {
        const registrosDeSesion = await RegistroDeSesion.findAll();
    
        if (registrosDeSesion.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado registros de sesion.' });
        }

        res.status(200).json(registrosDeSesion);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener los registros de sesion:', error });
    }
};


//_________Crear un registro de sesion_____________________________________
const create = async (req, res) => {
    try {
        const registroDeSesion = await crear(req.body);
        
        res.status(201).json(registroDeSesion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//_________Actualizar datos de un registro de sesion_____________________________
const update = async (req, res) => {
    const { id } = req.params;
    
    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = await actualizar(id, req.body);

        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido actualizar los datos del registro de sesion.' });
        }

        res.status(200).json({ message: 'Registro de sesion actualizado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al actualizar los datos del registro de sesion:', error });
    }
};


//_________Eliminar un registro de sesion________________________________________
const destroy = async (req, res) => {
    const { id } = req.params;
    
    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });
    
    try {
        const resultado = await RegistroDeSesion.destroy({
            where: { id }
        });

        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido encontrar el registro de sesion.' });
        }

        res.status(200).json({ message: 'Registro de sesion eliminado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al eliminar el registro de sesion:', error });
    }
};

module.exports = {
    getById,
    getAll,
    create,
    update,
    destroy
};