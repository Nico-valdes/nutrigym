'use strict';
/**@type {import('sequelize-cli').Migration} */

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Ejercicios', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            descripcion: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            link: {
                type: Sequelize.STRING,
            },
            cantidadRepeticionesRecomendadas: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            duracion: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            cantidadSeriesRecomendadas: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            musculoAfectado: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            divisionRutina: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Ejercicios');
    },
};