'use strict';
/**@type {import('sequelize-cli').Migration} */

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('PlanesAlimenticiosTienePlatillos', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            idPlanAlimenticio: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'PlanesAlimenticios',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            idPlatillo: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Platillos',
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
        await queryInterface.dropTable('PlanesAlimenticiosTienePlatillos');
    },
};