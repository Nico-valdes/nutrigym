const RutinaTieneEjercicios = require('../../../db/models/RutinaTieneEjercicios.js');
const Ejercicio = require('../../../db/models/Ejercicio.js');


//_________Obtener una rutina tiene ejercicios por su ID_______________________________
const obtenerPorId = async id => {
    return await RutinaTieneEjercicios.findByPk(id);
};

//_________Obtener todas las rutinas tienen ejercicios______________________________
const obtenerTodos = async () => {
    return await RutinaTieneEjercicios.findAll();
}

//_________Obtener todos los ejercicios por el ID de rutina__________________________________
const obtenerTodosEjerciciosPorIdRutina = async id => {
    try {
        const rutinasTienenEjercicios = await RutinaTieneEjercicios.findAll({
            where: { idRutina: id },
            attributes: ['idEjercicio']
        });
    
        if (rutinasTienenEjercicios.length === 0) {
            throw new Error('No se han encontrado ejercicios para la rutina proporcionada.');
        }

        const idEjercicios = rutinasTienenEjercicios.map(rutinaTieneEjercicio => rutinaTieneEjercicio.idEjercicio);
        const ejercicios = await Ejercicio.findAll({ where: { id: idEjercicios } })

        return ejercicios;
    } catch (error) {
        throw new Error('Se ha producido un error al obtener los ejercicios de la rutina: ' + error );
    }
};


//_________Obtener todas rutinas tienen ejercicios__________________________________
const obtenerTodosPorIdRutina = async id => {
    try {
        const rutinasTienenEjercicios = await RutinaTieneEjercicios.findAll({
            where: { idRutina: id },
        });
    
        return rutinasTienenEjercicios;
    } catch (error) {
        throw new Error('Se ha producido un error al obtener los ejercicios de la rutina: ' + error);
    }
};


//_________Crear una rutina tiene ejercicios_____________________________________
const crear = async rutinasTienenEjerciciosParam => {
    try {
        const rutinaTieneEjercicios = await RutinaTieneEjercicios.create({ rutinasTienenEjerciciosParam });

        await rutinaTieneEjercicios.save();
        
        return rutinaTieneEjercicios;
    } catch (error) {
        throw new Error(error.message);
    }
};


//_________Actualizar datos de una rutina tiene ejercicios_____________________________
const actualizar = async (id, rutinasTienenEjerciciosParam) => {
    const datosActualizados = {};

    if (rutinasTienenEjerciciosParam.idRutina) datosActualizados.idRutina = rutinasTienenEjerciciosParam.idRutina;
    if (rutinasTienenEjerciciosParam.idEjercicio) datosActualizados.idEjercicio = rutinasTienenEjerciciosParam.idEjercicio;

    try {
        const rutinaTieneEjercicios = await RutinaTieneEjercicios.findByPk(id);

        if (!rutinaTieneEjercicios) {
            throw new Error('Rutina tiene ejercicios no encontrada.');
        }

        const [actualizado] = await RutinaTieneEjercicios.update(
            datosActualizados,
            { where: { id } }
        );

        return actualizado;
    } catch (error) {
        throw new Error('Se ha producido un error al actualizar los datos de la rutina tiene ejercicios: ' +  error);
    }
};

//_________Eliminar una rutina tiene ejercicios________________________________________
const eliminar = async id => {
    try {
        const resultado = await RutinaTieneEjercicios.destroy({
            where: { id }
        });

        return resultado;
    } catch (error) {
        throw new Error('Se ha producido un error al eliminar la rutina tiene ejercicios: ' + error);
    }
};

module.exports = {
    obtenerPorId,
    obtenerTodos,
    obtenerTodosEjerciciosPorIdRutina,
    obtenerTodosPorIdRutina,
    crear,
    actualizar,
    eliminar
};