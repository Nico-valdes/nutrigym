const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/db');

class RutinaPdf extends Model {}

RutinaPdf.init({
    pdf: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'RutinaPdf',
    tableName: 'RutinasPdfs',
});

module.exports = RutinaPdf;
