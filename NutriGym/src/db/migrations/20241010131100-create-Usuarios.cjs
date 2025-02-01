'use strict';
/**@type {import('sequelize-cli').Migration} */

module.exports =  {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Usuarios', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            contrasenia: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            apellido: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            idRol: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Roles',
                    key: 'id',
                },
            },
            idRutinaPdf: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'RutinasPdfs',
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
        await queryInterface.dropTable('Usuarios');
    },
};