'use strict';
/**@type {import('sequelize-cli').Migration} */

module.exports =  {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('RutinasTieneEjercicios', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            idRutina: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Rutinas',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            idEjercicio: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Ejercicios',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
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
        await queryInterface.dropTable('RutinasTieneEjercicios');
    },
};