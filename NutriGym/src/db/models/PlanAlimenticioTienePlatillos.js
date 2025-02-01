const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/db');
const PlanAlimenticio = require('./PlanAlimenticio');
const Platillo = require('./Platillo');

class PlanAlimenticioTienePlatillos extends Model {}

PlanAlimenticioTienePlatillos.init({
    idPlanAlimenticio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PlanAlimenticio,
            key: 'id',
        },
    },
    idPlatillo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Platillo,
            key: 'id',
        },
    },
}, {
    sequelize,
    modelName: 'PlanAlimenticioTienePlatillos',
    tableName: 'PlanesAlimenticiosTienePlatillos',
});

PlanAlimenticio.hasMany(PlanAlimenticioTienePlatillos, { foreignKey: 'idPlanAlimenticio' });
Platillo.hasMany(PlanAlimenticioTienePlatillos, { foreignKey: 'idPlatillo' });

module.exports = PlanAlimenticioTienePlatillos;