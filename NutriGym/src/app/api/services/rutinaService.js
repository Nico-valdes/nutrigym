const Rutina = require('../../../db/models/Rutina');
const { Op } = require('sequelize');


//_________Obtener una rutina por su id________________________________
const obtenerPorId = async id => {
    return await Rutina.findByPk(id);
};


//_________Obtener una rutina por su nombre_______________________________
const obtenerPorNombre = async nombre => {
    return await Rutina.findOne({ where: { nombre } });
};


//_________Obtener todas rutinas__________________________________
const obtenerTodos = async () => {
    return await Rutina.findAll();
};


//_________Obtener todos por nombre con una palabra determinada__________________________________
const obtenerTodosPorNombreConPalabra = async palabra => {
    try {
        return await Rutina.findAll({
            where: { nombre: { [Op.iLike]: `%${palabra}%` } }
        });
    } catch (error) {
        throw new Error(error.message);
    }

};


//_________Crear una rutina_____________________________________
const crear = async rutinaParam => {
    try {
        const rutina = await Rutina.create(rutinaParam);
        
        await rutina.save();
        
        return rutina;
    } catch (error) {
        throw new Error(error.message);
    }
};


//_________Actualizar datos de una rutina_____________________________
const actualizar = async (id, rutinaParam) => {
    const datosActualizados = {};

    if (rutinaParam.nombre) datosActualizados.nombre = rutinaParam.nombre;
    if (rutinaParam.descripcion) datosActualizados.descripcion = rutinaParam.descripcion;

    try {
        const rutina = await Rutina.findByPk(id);

        if (!rutina) {
            throw new Error('Rutina no encontrada.');
        }

        const [actualizado] = await Rutina.update(
            datosActualizados,
            { where: { id } }
        );

        return actualizado;
    } catch (error) {
        throw new Error ('Se ha producido un error al actualizar los datos de la rutina: ' + error );
    }
};


//_________Eliminar una rutina________________________________________
const eliminar = async id => {
    try {
        const resultado = await Rutina.destroy({
            where: { id }
        });

        return resultado;
    } catch (error) {
        throw new Error('Se ha producido un error al eliminar la rutina.' + error.message );
    }
};

module.exports = {
    obtenerPorNombre,
    obtenerTodos,
    obtenerTodosPorNombreConPalabra,
    crear,
    actualizar,
    eliminar,
    obtenerPorId
};
