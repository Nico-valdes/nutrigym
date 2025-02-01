const Ejercicio = require('../../../db/models/Ejercicio.js');
const { Op } = require('sequelize');

//_________Obtener un ejercicio por su ID_______________________________
const obtenerPorId = async id => {
    return await Ejercicio.findByPk(id);
};

//_________Obtener todos por nombre con una palabra determinada__________________________________
const obtenerTodosPorNombreConPalabra = async palabra => {
    return await Ejercicio.findAll({
        where: { nombre: { [Op.iLike]: `%${palabra}%` } }
    });
};


//_________Obtener todos los ejercicios__________________________________
const obtenerTodos = async () => {
    return await Ejercicio.findAll();
};


//_________Crear un nuevo ejercicio_____________________________________
const crear = async ejercicioParam => {
    try {
        const ejercicio = await Ejercicio.create(ejercicioParam);
        return ejercicio;
    } catch (error) {
        throw new Error('Error al crear el ejercicio: ' + error.message);
    }
};


//_________Actualizar datos de un ejercicio_____________________________
const actualizar = async (id, nombre, descripcion, link, cantidadRepeticionesRecomendadas, duracion, cantidadSeriesRecomendadas, musculoAfectado, divisionRutina ) => {
    

    const datosActualizados = {};

    if (nombre) datosActualizados.nombre = nombre;
    if (descripcion) datosActualizados.descripcion = descripcion;
    if (link) datosActualizados.link = link;
    if (cantidadSeriesRecomendadas) datosActualizados.cantidadSeriesRecomendadas = cantidadSeriesRecomendadas;
    if (musculoAfectado) datosActualizados.musculoAfectado = musculoAfectado;
    if (divisionRutina) datosActualizados.divisionRutina = divisionRutina;

    if (cantidadRepeticionesRecomendadas) {
        datosActualizados.cantidadRepeticionesRecomendadas = cantidadRepeticionesRecomendadas;
        datosActualizados.duracion = null;
    } else {
        datosActualizados.duracion = duracion;
        datosActualizados.cantidadRepeticionesRecomendadas = null;
    }

    try {
        const ejercicio = await Ejercicio.findByPk(id);

        if (!ejercicio) {
            return null;
        }

        const [actualizado] = await Ejercicio.update(
            datosActualizados,
            { where: { id } }
        );


        return [actualizado];
    } catch {
        throw new Error('Error al actualizar el ejercicio: ' + error.message);
    }

};

//_________Eliminar un ejercicio________________________________________
const eliminar = async id => {
    try {
        const resultado = await Ejercicio.destroy({
            where: { id }
        });

        return resultado;
    } catch (error) {
        throw new Error('Error al eliminar el ejercicio: ' + error.message);
    }
};

module.exports = {
    obtenerPorId,
    obtenerTodos,
    crear,
    actualizar,
    eliminar,
    obtenerTodosPorNombreConPalabra
};