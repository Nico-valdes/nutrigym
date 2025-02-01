const RegistroDeSesion = require('../../../db/models/RegistroDeSesion.js');


//_________Obtener un registro de sesion por su ID_______________________________
const obtenerPorId = async id => {
    return await RegistroDeSesion.findByPk(id);
};


//_________Obtener todos registros de sesion__________________________________
const obtenerTodos = async (req, res) => {
    try {
        return await RegistroDeSesion.findAll();
    } catch (error) {
        throw new Error('Se ha producido un error al obtener los registros de sesion:' + error );
    }
};


//_________Crear un registro de sesion_____________________________________
const crear = async regSessionParam => {
    try {
        const registroDeSesion = await RegistroDeSesion.create(regSessionParam);

        await registroDeSesion.save();

        return registroDeSesion;
    } catch (error) {
        throw new Error(error.message );
    }
};


//_________Actualizar datos de un registro de sesion_____________________________
const actualizar = async (id, regSessionParam) => {
    const datosActualizados = {};

    if (regSessionParam.fecha) datosActualizados.fecha = regSessionParam.fecha;
    if (regSessionParam.hora) datosActualizados.hora = regSessionParam.hora;
    if (regSessionParam.idUsuario) datosActualizados.idUsuario = regSessionParam.idUsuario;

    try {
        const registroDeSesion = await RegistroDeSesion.findByPk(id);

        if (!registroDeSesion) {
            throw new Error('Registro de sesion no encontrado.');
        }

        const [actualizado] = await RegistroDeSesion.update(
            datosActualizados,
            { where: { id } }
        );

        return actualizado;
    } catch (error) {
        throw new Error('Se ha producido un error al actualizar los datos del registro de sesion:' + error);
    }
};


//_________Eliminar un registro de sesion________________________________________
const eliminar = async (req, res) => {
    const { id } = req.params;
    
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
    obtenerPorId,
    obtenerTodos,
    crear,
    actualizar,
    eliminar
};