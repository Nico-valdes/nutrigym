const PlanAlimenticio = require('../../../db/models/PlanAlimenticio');
const { Op } = require('sequelize');

//_________Obtener un plan alimenticio por su ID_______________________________
const obtenerPorId = async id => {
    return await PlanAlimenticio.findByPk(id);
};


//_________Obtener una rutina por su nombre_______________________________
const obtenerPorNombre = async nombre => {
    try {
        const planAlimenticio = await PlanAlimenticio.findOne({ where: { nombre } });
    
        if (!planAlimenticio) {
            throw new Error("No se ha podido encontrar el plan alimenticio.");
        }

        return planAlimenticio;
    } catch (error) {
        throw new Error(error);
    }
};


//_________Obtener todos los planes alimenticios__________________________________
const obtenerTodos = async () => {
    return await PlanAlimenticio.findAll();
};


//_________Obtener todos por nombre con una palabra determinada__________________________________
const obtenerTodosPorNombreConPalabra = async palabra => {
    try {
        const planesAlimenticios = await PlanAlimenticio.findAll({
            where: {
                nombre: {
                    [Op.iLike]: `%${palabra}%`
                }
            }
        });

        return planesAlimenticios;
    } catch (error) {
        throw new Error('Se ha producido un error al obtener los planes alimenticios: ' + error.message );
    }
};


//_________Crear un plan alimenticio_____________________________________
const crear = async pAlimenParam => {
    const planAlimenticio = await PlanAlimenticio.create(pAlimenParam);

    await planAlimenticio.save();
        
    return planAlimenticio;
};


//_________Actualizar datos de un plan alimenticio_____________________________
const actualizar = async (id, pAlimenParam) => {
    const datosActualizados = {};

    if (pAlimenParam.nombre) datosActualizados.nombre = pAlimenParam.nombre;
    if (pAlimenParam.descripcion) datosActualizados.descripcion = pAlimenParam.descripcion;

    try {
        const planAlimenticio = await PlanAlimenticio.findByPk(id);

        if (!planAlimenticio) {
            return res.status(404).json({ message: 'Plan alimenticio no encontrado.' });
        }

        const [actualizado] = await PlanAlimenticio.update(
            datosActualizados,
            { where: { id } }
        );

        return actualizado;
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al actualizar los datos del plan alimenticio:', error });
    }
};

//_________Eliminar un plan alimenticio________________________________________
const eliminar = async id => {
    
    try {
        const resultado = await PlanAlimenticio.destroy({
            where: { id }
        });

        return resultado;
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al eliminar el plan alimenticio:', error });
    }
};

module.exports = {
    obtenerPorId,
    obtenerPorNombre,
    obtenerTodos,
    obtenerTodosPorNombreConPalabra,
    crear,
    actualizar,
    eliminar
};