const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/db.js');


class Platillo extends Model {}

Platillo.init({
   nombre: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    turno:{
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Platillo',
    tableName: 'Platillos',
});


module.exports = Platillo;
