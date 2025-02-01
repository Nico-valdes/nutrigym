const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/db');

class PlanAlimenticio extends Model {}

PlanAlimenticio.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'PlanAlimenticio',
    tableName: 'PlanesAlimenticios',
});

module.exports = PlanAlimenticio;
