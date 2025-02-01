const {
    obtenerPorId,
    obtenerPorEmail,
    obtenerTodos,
    obtenerTodosPorNombreConPalabra,
    crear,
    actualizar,
    eliminar
} = require('../services/usuarioService');

//_________Obtener un usuario por ID__________________________________
const getById = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const usuario = await obtenerPorId(id);

        if (!usuario) {
            throw new Error('No se ha podido encontrar al usuario.');
        }

        return res.status(201).json({
            message: 'Usuario obtenido exitosamente',
            usuario
        });
    } catch (error) {
        throw new Error(`Se ha producido un error al obtener el usuario: ${error.message}`);
    }
};


//_________Obtener un usuario por Email__________________________________
const getByEmail = async (req, res) => {
    const { email } = req.params;

    if (!email) return res.status(500).json({ message: 'Debe ingresar un email por parámetro.' });

    try {
        const usuario = await obtenerPorEmail(email);

        if (!usuario) {
            throw new Error('No se ha podido encontrar al usuario.');
        }

        return res.status(201).json({
            message: 'Usuario obtenido exitosamente',
            usuario
        });
    } catch (error) {
        throw new Error(`Se ha producido un error al obtener el usuario: ${error.message}`);
    }
};


//_________Obtener todos los usuarios__________________________________
const getAll = async (req, res) => {
    try {
        const usuarios = await obtenerTodos();
    
        if (usuarios.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado usuarios.' });
        }

        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener los usuarios:', error });
    }
};


//_________Obtener todos los usuarios por nombre o apellido con una palabra determinada__________________________________
const getAllByNombreWithPalabra = async (req, res) => {
    const { palabra } = req.params;

    if (!palabra) return res.status(500).json({ message: 'Debe ingresar una palabra por parámetro.' });

    try {
        const usuarios = await obtenerTodosPorNombreConPalabra(palabra);

        if (usuarios.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado usuarios.' });
        }

        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener los usuarios.', error: error.message });
    }

};


//_________Registrar un nuevo usuario_____________________________________
const create = async (req, res) => {
    try {
        const usuario = await crear(req.body);
        
        return res.status(201).json({
            message: 'Usuario registrado exitosamente',
            usuario: {
                id: usuario.id,
                email: usuario.email,
                nombre: usuario.nombre,
                apellido: usuario.apellido
            }
        });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ message: 'El email ya está en uso' });
        }
        return res.status(500).json({ message: `Error al registrar usuario: ${error}` });
    }
};


//_________Actualizar datos de un usuario________________________________
const update = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    const datos = req.body;

    if (!datos || Object.keys(datos).length === 0) {
        return res.status(400).json({ message: 'Debe proporcionar datos para actualizar.' });
    }

    try {
        const resultado = await actualizar(id, datos);

        if (resultado === 0) {
            return res.status(404).json({ error: 'No se ha podido actualizar los datos del usuario.' });
        }

        return res.json({ message: 'Usuario actualizado con éxito.' });
    } catch (error) {
        return res.status(500).json({ error: `Se ha producido un error al actualizar los datos del usuario: ${error.message}` });
    }
};


//_________Eliminar un usuario________________________________________
const destroy = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = await eliminar(id);

        if (resultado === 0) {
            return res.status(404).json({ error: 'No se ha podido eliminar al usuario.' });
        }

        return res.status(201).json({
            message: 'Usuario eliminado con éxito.' 
        });
    } catch (error) {
        throw new Error(`Se ha producido un error al eliminar el usuario: ${error.message}`);
    }
};

module.exports = {
    getById,
    getByEmail,
    getAll,
    getAllByNombreWithPalabra,
    create,
    update,
    destroy
};