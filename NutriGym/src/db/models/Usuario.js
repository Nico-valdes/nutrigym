const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const { sequelize } = require('../../../config/db');
const Rol = require('./Rol');
const PlanAlimenticio = require('./PlanAlimenticio');
const Rutina = require('./Rutina');
const RutinaPdf = require('./RutinaPdf');

// Método para encriptar contraseñas
class Usuario extends Model {
    async encriptarContrasenia() {
        const salt = await bcrypt.genSalt(10);
        this.contrasenia = await bcrypt.hash(this.contrasenia, salt);
    }
}

Usuario.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    contrasenia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idRol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Rol,
            key: 'id',
        },
    },
    idRutinaPdf: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: RutinaPdf,
            key: 'id',
        },
    },
}, {
    sequelize,
    modelName: 'Usuario',
});

Rol.hasMany(Usuario, {
    foreignKey: 'idRol',
});

RutinaPdf.hasMany(Usuario, {
    foreignKey: 'idRutinaPdf',
});

Usuario.belongsTo(Rol, { foreignKey: 'idRol' });
Usuario.belongsTo(RutinaPdf, { foreignKey: 'idRutinaPdf' });

module.exports = Usuario;
