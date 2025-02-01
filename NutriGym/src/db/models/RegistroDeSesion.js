const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/db.js');
const Usuario = require('./Usuario.js');

class RegistroDeSesion extends Model {}

RegistroDeSesion.init({
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id',
        },
    },
}, {
    sequelize,  
    modelName: 'RegistroDeSesion',
    tableName: 'RegistrosDeSesiones',
});

Usuario.hasMany(RegistroDeSesion, {
    foreignKey: 'idUsuario',
});

RegistroDeSesion.belongsTo(Usuario, { foreignKey: 'idUsuario' });

module.exports = RegistroDeSesion;