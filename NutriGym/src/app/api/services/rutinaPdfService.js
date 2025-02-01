const RutinaPdf = require('../../../db/models/RutinaPdf.js');


//_________Obtener una rutina pdf por su ID_______________________________
const obtenerPorId = async id => {
    return await RutinaPdf.findByPk(id);
};


//_________Obtener todas las rutinas pdf__________________________________
const obtenerTodos = async () => {
    return await RutinaPdf.findAll()
}

//_________Crear una rutina pdf_____________________________________
const crear = async rutinaPdfParam => {
    try {
        const rutinaPdf = await RutinaPdf.create(rutinaPdfParam);

        return rutinaPdf;
    } catch (error) {
        throw new Error('Se ha producido un error al crear la rutina PDF: ' + error.message);
    }
};


//_________Actualizar datos de una rutina pdf_____________________________
const actualizar = async (id, rutinaPdfParam) => {
    const datosActualizados = {};

    if (rutinaPdfParam.pdf) datosActualizados.pdf = rutinaPdfParam.pdf;
    if (rutinaPdfParam.nombre) datosActualizados.nombre = rutinaPdfParam.nombre;

    try {
        const rutinaPdf = await RutinaPdf.findByPk(id);

        if (!rutinaPdf) {
            throw new Error('Rutina pdf no encontrada.');
        }

        const [actualizado] = await RutinaPdf.update(
            datosActualizados,
            { where: { id } }
        );

        return actualizado;
    } catch (error) {
        throw new Error('Se ha producido un error al actualizar los datos de la rutina pdf: ' + error);
    }
};


//_________Eliminar una rutina pdf________________________________________
const eliminar = async id => {
    try {
        const resultado = await RutinaPdf.destroy({
            where: { id }
        });

        return resultado;
    } catch (error) {
        throw new Error('Se ha producido un error al eliminar la rutina pdf: ' + error);
    }
};

module.exports = {
    obtenerPorId,
    obtenerTodos,
    crear,
    actualizar,
    eliminar
};