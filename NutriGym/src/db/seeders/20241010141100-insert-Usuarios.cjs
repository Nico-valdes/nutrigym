'use strict';
const bcrypt = require('bcrypt');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const saltRounds = 10;
        const hashedPasswordAdmin = await bcrypt.hash('admin', saltRounds);
        const hashedPasswordNormie = await bcrypt.hash('normie', saltRounds);
        const hashedPasswordNutri = await bcrypt.hash('nutricion12345', saltRounds);

        await queryInterface.bulkInsert('Usuarios', [{
            email: 'admin@example.com',
            contrasenia: hashedPasswordAdmin,
            nombre: 'Lionel',
            apellido: 'Messi',
            idRol: 1,
            idRutinaPdf: 1
        }, {
            email: 'normie@example.com',
            contrasenia: hashedPasswordNormie,
            nombre: 'Jose Maria',
            apellido: 'Listorti',
            idRol: 2,
            idRutinaPdf: null
        }, {
            email: 'nutri@example.com',
            contrasenia: hashedPasswordNutri,
            nombre: 'Juan',
            apellido: 'Perez',
            idRol: 1,
            idRutinaPdf: null
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Usuarios', { 
            email: {
                [Sequelize.Op.or]: ['admin@example.com', 'normie@example.com', 'nutri@example.com']
            } 
        }, {});
    }
};
