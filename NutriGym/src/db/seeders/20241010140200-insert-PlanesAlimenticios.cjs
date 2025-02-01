'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('PlanesAlimenticios', [{
            nombre: 'Perdida de peso sin restricciones',
            descripcion: `
            Este plan se centra en la moderación y el equilibrio, permitiendo una variedad 
            de alimentos. Incluye porciones controladas de carbohidratos integrales, proteínas 
            magras (como pollo, pescado o legumbres), y muchas frutas y verduras. Se fomenta 
            el consumo de grasas saludables, como aguacate y nueces.             
            `
        }, {
            nombre: 'Perdida de peso vegetariano',
            descripcion: `
           Este plan se basa en alimentos de origen vegetal, priorizando las verduras, 
           frutas, legumbres, granos enteros y frutos secos. Se recomienda incluir fuentes 
           de proteína como tofu, tempeh, y legumbres, además de lácteos bajos en grasa o 
           alternativas vegetales. Se promueve el consumo de grasas saludables y la reducción 
           de azúcares añadidos. Las porciones son moderadas, y se sugiere una ingesta adecuada 
           de fibra para promover la saciedad.
            `
        }, {
            nombre: 'Perdida de peso celiaco',
            descripcion: `
            Este plan evita todos los alimentos que contienen gluten, centrándose en 
            granos sin gluten como arroz, quinoa, y mijo. Se incluyen muchas frutas, 
            verduras, proteínas magras (carne, pescado, legumbres) y grasas saludables. 
            Las comidas son variadas y equilibradas, incorporando snacks saludables como 
            frutas, nueces o yogur sin gluten. Este enfoque permite disfrutar de una dieta 
            completa sin restricciones, promoviendo la pérdida de peso de manera saludable.
            `
        }, {
            nombre: 'Ganancia de musculo sin restricciones',
            descripcion: `
            Este plan se basa en el aumento de calorías a través de una dieta equilibrada y 
            variada. Incluye una amplia gama de alimentos, centrándose en fuentes de proteínas 
            magras (como pollo, pavo, pescado y huevos), carbohidratos complejos (como arroz 
            integral, quinoa y avena) y grasas saludables (como aguacate, aceite de oliva y nueces). 
            `
        }, {
            nombre: 'Ganancia de musculo vegetariano',
            descripcion: `
            Este plan enfatiza las proteínas de origen vegetal, incluyendo legumbres, tofu, y 
            productos lácteos o alternativas vegetales ricas en proteínas. Se incorporan carbohidratos 
            complejos como quinoa, arroz integral, y pasta integral, además de muchas frutas y 
            verduras. Se recomienda el consumo de grasas saludables y la inclusión de snacks ricos en 
            proteínas, como batidos de proteínas vegetales o frutos secos. La clave es asegurar un 
            superávit calórico adecuado para fomentar la hipertrofia muscular.
            `
        }, {
            nombre: 'Ganancia de musculo celiaco',
            descripcion: `
            Este plan evita todos los alimentos que contienen gluten y se enfoca en aumentar el 
            consumo de calorías a través de alimentos ricos en nutrientes. Se incluyen proteínas 
            magras como pollo, pescado, huevos, y legumbres, además de granos sin gluten como arroz,
            quinoa, y mijo. Se promueve el consumo de frutas, verduras, y grasas saludables. Las 
            comidas son equilibradas y se distribuyen a lo largo del día, asegurando un suministro 
            constante de nutrientes para facilitar el crecimiento muscular.               
            `
        }, {
            nombre: 'Mantenimiento sin restricciones',
            descripcion: `
            Este plan se centra en mantener un equilibrio calórico, permitiendo una variedad de 
            alimentos sin restricciones estrictas. Incluye porciones adecuadas de proteínas magras
             (pollo, pescado, legumbres), carbohidratos complejos (arroz integral, quinoa, y 
             batatas) y grasas saludables (aguacate, nueces, y aceite de oliva).
            `
        }, {
            nombre: 'Mantenimiento vegetariano',
            descripcion: `
            Este plan está diseñado para mantener el peso y se basa en alimentos de origen vegetal, 
            incorporando una variedad de verduras, frutas, legumbres, granos enteros y frutos secos. 
            Se incluyen fuentes de proteínas vegetales como tofu, tempeh y productos lácteos o 
            alternativas veganas. El enfoque está en mantener un equilibrio calórico adecuado y 
            promover la saciedad a través de una ingesta suficiente de fibra y grasas saludables, 
            sin caer en restricciones.
            `
        }, {
            nombre: 'Mantenimiento celiaco',
            descripcion: `
            Este plan evita todos los alimentos que contienen gluten y se centra en mantener un 
            equilibrio calórico saludable. Se incluyen proteínas magras como pollo, pescado, huevos 
            y legumbres, además de granos sin gluten como arroz, quinoa y mijo. Se promueve un consumo 
            adecuado de frutas y verduras frescas, junto con grasas saludables. Las comidas son 
            variadas y se distribuyen a lo largo del día, asegurando una ingesta equilibrada de 
            nutrientes para mantener un peso estable.
            `
        }
    ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('PlanesAlimenticios', null, {});
    }
};