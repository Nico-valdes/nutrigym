'use strict';
/**@type {import('sequelize-cli').Migration} */

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Roles', {
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
        await queryInterface.dropTable('Roles');
    },
};