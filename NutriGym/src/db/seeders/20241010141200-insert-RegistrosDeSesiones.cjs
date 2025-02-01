'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('RegistrosDeSesiones', [{
            idUsuario: 1
        }, {
            idUsuario: 2
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('RegistrosDeSesiones', null, {});
    }
};