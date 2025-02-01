'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Roles', [{
            nombre: 'Administrador'
        }, {
            nombre: 'Cliente'
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Roles', null, {});
    }
};