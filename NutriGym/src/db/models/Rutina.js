const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/db');

class Rutina extends Model {}

Rutina.init({
    nombre: {  // En el nombre de las rutinas usaremos: GananciaMuscular, Mantenimiento, PerdidaPeso para facilitar resultados y búsqueda
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Rutina',
});

module.exports = Rutina;