const Platillo = require('../../../db/models/Platillo.js');
const { Op } = require('sequelize');


//_________Obtener un platillo por su ID_______________________________
const obtenerPorId = async id => {
    return await Platillo.findByPk(id);
};


//_________Obtener todos los platillos__________________________________
const obtenerTodos = async () => {
    return await Platillo.findAll();
};


//_________Obtener todos por nombre con una palabra determinada__________________________________
const obtenerTodosPorNombreConPalabra = async palabra => {
    try {
        const platillos = await Platillo.findAll({
            where: { nombre: { [Op.iLike]: `%${palabra}%` } }
        });

        return platillos;
    } catch (error) {
        throw new Error('Se ha producido un error al obtener los platillos.' + error );
    }

};

//_________Crear un nuevo platillo_____________________________________
const crear = async platilloParam => {
    try {
        const platillo = await Platillo.create(req.body);

        await platillo.save();

        return platillo;
    } catch (error) {
        throw new Error(error.message);
    }
};


//_________Actualizar datos de un platillo_____________________________
const actualizar = async (id, platilloParam) => {
    const datosActualizados = {};

    if (platilloParam.nombre) datosActualizados.nombre = platilloParam.nombre;
    if (platilloParam.turno) datosActualizados.turno = platilloParam.turno;

    try {
        const platillo = await Platillo.findByPk(id);

        if (!platillo) {
            return res.status(404).json({ message: 'Paltillo no encontradoa.' });
        }

        const [actualizado] = await Platillo.update(
            datosActualizados,
            { where: { id } }
        );

        return actualizado;
    } catch (error) {
        throw new Error('Se ha producido un error al actualizar los datos de la comida:' + error );
    }
};


//_________Eliminar un platillo________________________________________
const eliminar = async id => {
    try {
        const resultado = await Platillo.destroy({
            where: { id }
        });
        
        return resultado;
    } catch (error) {
        throw new Error('Se ha producido un error al eliminar la comida: ' + error );
    }
};

module.exports = {
    obtenerPorId,
    obtenerTodos,
    obtenerTodosPorNombreConPalabra,
    crear,
    actualizar,
    eliminar
};