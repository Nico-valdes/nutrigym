const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/db.js');
const Rutina = require('./Rutina.js');
const Ejercicio = require('./Ejercicio.js');

class RutinaTieneEjercicios extends Model {}

RutinaTieneEjercicios.init({
    idRutina: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Rutina,
            key: 'id',
        },
    },
    idEjercicio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Ejercicio,
            key: 'id',
        },
    },
}, {
    sequelize,  
    modelName: 'RutinaTieneEjercicios',
    tableName: 'RutinasTieneEjercicios',
});

Rutina.hasMany(RutinaTieneEjercicios, { foreignKey: 'idRutina' });
Ejercicio.hasMany(RutinaTieneEjercicios, { foreignKey: 'idEjercicio' });

module.exports = RutinaTieneEjercicios;