const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/db');

class Rol extends Model {}

Rol.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Rol',
    tableName: 'Roles',
});

module.exports = Rol;