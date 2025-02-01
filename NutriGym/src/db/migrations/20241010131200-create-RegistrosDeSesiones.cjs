'use strict';
/**@type {import('sequelize-cli').Migration} */

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('RegistrosDeSesiones', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            idUsuario: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Usuarios',
                    key: 'id',
                },
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
        await queryInterface.dropTable('RegistrosDeSesiones');
    },
};