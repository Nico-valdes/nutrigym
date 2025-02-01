'use strict';

module.exports =  {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Rutinas', [{
            nombre: 'Hipertrofia',
            descripcion: 'Entrenamiento diseñado para aumentar el tamaño muscular, mediante series de 8-12 repeticiones con peso moderado a alto, trabajando hasta la fatiga muscular.'
        }, {
            nombre: 'Recomposición',
            descripcion: 'Programa que combina entrenamiento de fuerza y cardio, enfocado en reducir grasa corporal mientras se gana músculo, buscando mejorar la proporción músculo-grasa.'
        }, {
            nombre: 'Definición',
            descripcion: 'Rutina que busca reducir grasa corporal mientras se mantiene la masa muscular, combinando ejercicios de resistencia con cardio, y enfocándose en una dieta hipocalórica.'
        }, {
            nombre: 'Adaptación',
            descripcion: 'Fase inicial de entrenamiento, con ejercicios de baja a moderada intensidad, para que el cuerpo se acostumbre al esfuerzo físico y evite lesiones.'
        }, {
            nombre: 'Pérdida de peso',
            descripcion: 'Programa enfocado en quemar calorías y grasa corporal mediante ejercicios cardiovasculares, entrenamiento de fuerza y una dieta hipocalórica para reducir el peso total.'
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Rutinas', null, {});
    }
};