const PlanAlimenticioTienePlatillos = require('../../../db/models/PlanAlimenticioTienePlatillos');
const Platillo = require('../../../db/models/Platillo');


//_________Obtener un plan alimenticio tiene comidas por su ID_______________________________
const obtenerPorId = async id => {
    return await PlanAlimenticioTienePlatillos.findByPk(id);
};


//_________Obtener todos los planes alimenticios tienen comidas__________________________________
const obtenerTodos = async () => {
    return await PlanAlimenticioTienePlatillos.findAll();
};


//_________Obtener todos por ID de plan alimenticio__________________________________
const obtenerTodosPorIdPlanAlimenticio = async id => {
    return  await PlanAlimenticioTienePlatillos.findAll({
        where: { idPlanAlimenticio: id },
    });
};


//_________Obtener todas por ID__________________________________
const obtenerTodosPlatillosPorIdPlanAlimenticio = async id => {
    try {
        const planesAlimenticiosTienePlatillos = await PlanAlimenticioTienePlatillos.findAll({
            where: { idPlanAlimenticio: id },
            attributes: ['idPlatillo']
        });
    
        if (planesAlimenticiosTienePlatillos.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado platillos para el plan alimenticio proporcionado.' });
        }

        const idPlatillos = planesAlimenticiosTienePlatillos.map(planAlimenticioTienePlatillo => planAlimenticioTienePlatillo.idPlatillo);

        const platillos = await Platillo.findAll({ where: { id: idPlatillos }});

        return platillos;
    } catch (error) {
        throw new Error('Se ha producido un error al obtener los platillos del plan alimenticio:', error );
    }
};


//_________Crear un plan alimenticio tiene comidas_____________________________________
const crear = async (idPlanAlimenticio, idPlatillo) => {
    try {
        const planAlimenticioTienePlatillos = await PlanAlimenticioTienePlatillos.create({
            idPlanAlimenticio,
            idPlatillo
        });
        
        await planAlimenticioTienePlatillos.save();

        return planAlimenticioTienePlatillos;
    } catch (error) {
        throw new Error('Se ha producido un error al crear la relación: ' + error );
    }
};


//_________Actualizar datos de un plan alimenticio tiene comidas_____________________________
const actualizar = async (id, relacion) => {

    const datosActualizados = {};

    if (relacion.idPlanAlimenticio) datosActualizados.idPlanAlimenticio = relacion.idPlanAlimenticio;
    if (relacion.idComida) datosActualizados.idComida = relacion.idComida;

    try {
        const planAlimenticioTienePlatillos = await PlanAlimenticioTienePlatillos.findByPk(id);

        if (!planAlimenticioTienePlatillos) {
            return res.status(404).json({ message: 'Plan alimenticio tiene comidas no encontrado.' });
        }

        const [actualizado] = await PlanAlimenticioTienePlatillos.update(
            datosActualizados,
            { where: { id } }
        );

        return actualizado;
    } catch (error) {
        throw new Error('Se ha producido un error al actualizar los datos del plan alimenticio tiene comidas: ' + error );
    }
};

//_________Eliminar un plan alimenticio tiene comidas________________________________________
const eliminar = async id => {
    try {
        const resultado = await PlanAlimenticioTienePlatillos.destroy({ where: { id } });

        return resultado;
    } catch (error) {
        throw new Error('Se ha producido un error al eliminar el plan alimenticio tiene comidas: ' + error );
    }
};

module.exports =  {
    obtenerPorId,
    obtenerTodos,
    obtenerTodosPorIdPlanAlimenticio,
    obtenerTodosPlatillosPorIdPlanAlimenticio,
    crear,
    actualizar,
    eliminar
};
