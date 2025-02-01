const Rol = require('../../../db/models/Rol.js');


//_________Obtener un rol por su ID_______________________________
const obtenerPorId = async id => {
    return await Rol.findByPk(id);
};


//_________Obtener todos roles__________________________________
const obtenerTodos = async () => {
    return await Rol.findAll();
};


//_________Crear un rol_____________________________________
const crear = async rolParam => {
    try {
        const rol = await Rol.create(rolParam);
        
        await rol.save();
        
        return rol;
    } catch (error) {
        throw new Error(error.message);
    }
};


//_________Actualizar datos de un rol_____________________________
const actualizar = async (id, rolParam) => {
    const datosActualizados = {};

    if (rolParam.nombre) datosActualizados.nombre = rolParam.nombre;

    try {
        const rol = await Rol.findByPk(id);

        if (!rol) {
            throw new Error('Rol no encontrado.');
        }

        const [actualizado] = await Rol.update(
            datosActualizados,
            { where: { id } }
        );

        return actualizado;
    } catch (error) {
        throw new Error('Se ha producido un error al actualizar los datos del rol:' + error);
    }
};


//_________Eliminar un rol________________________________________
const eliminar = async id => {
    try {
        return await Rol.destroy({
            where: { id }
        });
    } catch (error) {
        throw new Error('Se ha producido un error al eliminar el rol: ' + error );
    }
};

module.exports = {
    obtenerPorId,
    obtenerTodos,
    crear,
    actualizar,
    eliminar
};