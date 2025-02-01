const Usuario = require('../../../db/models/Usuario');
const { Op } = require('sequelize');

//_________Obtener un usuario por ID__________________________________
const obtenerPorId = async id => {
    return await Usuario.findByPk(id);
};


//_________Obtener un usuario por Email__________________________________
const obtenerPorEmail = async email => {
    return await Usuario.findOne({ where: { email } });
};


//_________Obtener todos los usuarios__________________________________
const obtenerTodos = async () => {
    return await Usuario.findAll();
}

//_________Obtener todos los usuarios por nombre o apellido con una palabra determinada__________________________________
const obtenerTodosPorNombreConPalabra = async palabra => {
    return await Usuario.findAll({
        where: {
            [Op.or]: [
                { nombre: { [Op.iLike]: `%${palabra}%` } },
                { apellido: { [Op.iLike]: `%${palabra}%` } }
            ]
        }
    });
};

const existeUsuarioConMail = async email => {
    const usuarioExistente = await obtenerPorEmail(email);

        if (usuarioExistente) {
            return true;
        } else {
            return false;
        }
}


//_________Registrar un nuevo usuario_____________________________________
const crear = async usuarioParam => {
    try {
        const existe = await existeUsuarioConMail(usuarioParam.email);

        if (existe) {
            throw new Error('El usuario ya existe.');
        } else {
            console.log("ok")
        }

        const usuario = await Usuario.build(usuarioParam);

        await usuario.encriptarContrasenia();
        await usuario.save();

        return usuario;
    } catch {
        throw new Error(`Error al crear el usuario: ${error.message}`)
    }
};


//_________Actualizar datos de un usuario________________________________
const actualizar = async (id, usuarioParam) => {
    if (!usuarioParam || Object.keys(usuarioParam).length === 0) {
        throw new Error("No se proporcionaron datos para actualizar.");
    }

    const datosActualizados = { ...usuarioParam };

    if (usuarioParam.contrasenia) {
        const usuario = Usuario.build({ contrasenia: usuarioParam.contrasenia });
        await usuario.encriptarContrasenia();
        datosActualizados.contrasenia = usuario.contrasenia;
    }

    const [actualizado] = await Usuario.update(datosActualizados, { where: { id } });

    return actualizado;
};


//_________Eliminar un usuario________________________________________
const eliminar = async id => {
    try {
        const resultado = await Usuario.destroy({
            where: {
              id: id,
            },
        });

        return resultado;
    } catch (error) {
        throw new Error(`Se ha producido un error al eliminar el usuario: ${error.message}`);
    }
};

module.exports = {
    obtenerPorId,
    obtenerPorEmail,
    obtenerTodos,
    obtenerTodosPorNombreConPalabra,
    existeUsuarioConMail,
    crear,
    actualizar,
    eliminar
};