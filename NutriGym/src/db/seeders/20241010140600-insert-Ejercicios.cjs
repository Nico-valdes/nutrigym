'use strict';

module.exports =  {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Ejercicios', [
            {
                nombre: "Press de pecho en banco",
                descripcion: "Acuéstate en un banco plano y sujeta una barra con las manos a la anchura de los hombros. Empuja la barra hacia arriba hasta que los brazos estén completamente extendidos y luego baja lentamente hasta el pecho.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Pecho",
                divisionRutina: "Push"
            },
            {
                nombre: "Press inclinado con mancuernas",
                descripcion: "Acuéstate en un banco inclinado y sujeta una mancuerna en cada mano. Empuja hacia arriba y hacia dentro hasta que los brazos estén completamente extendidos y luego baja lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Pecho",
                divisionRutina: "Push"
            },
            {
                nombre: "Elevación lateral con mancuernas",
                descripcion: "De pie, sujeta una mancuerna en cada mano y eleva los brazos lateralmente hasta que estén a la altura de los hombros. Baja lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Hombros",
                divisionRutina: "Push"
            },
            {
                nombre: "Press de hombros con mancuernas",
                descripcion: "Siéntate en un banco y sujeta una mancuerna en cada mano a la altura de los hombros. Empuja hacia arriba hasta que los brazos estén completamente extendidos y luego baja.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Hombros",
                divisionRutina: "Push"
            },
            {
                nombre: "Extensión de tríceps con mancuerna",
                descripcion: "Sujeta una mancuerna con ambas manos por encima de la cabeza. Flexiona los codos para bajar la mancuerna detrás de la cabeza y luego extiende los brazos para levantarla.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Tríceps",
                divisionRutina: "Push"
            },
            {
                nombre: "Jalón al pecho en polea",
                descripcion: "Siéntate en la máquina de polea y sujeta la barra con un agarre ancho. Tira de la barra hacia el pecho mientras aprietas los omóplatos y luego vuelve lentamente a la posición inicial.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Espalda",
                divisionRutina: "Pull"
            },
            {
                nombre: "Remo con barra",
                descripcion: "De pie con las rodillas ligeramente flexionadas, inclina el torso hacia adelante y sujeta una barra con ambas manos. Tira de la barra hacia el abdomen apretando los omóplatos y luego baja.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Espalda",
                divisionRutina: "Pull"
            },
            {
                nombre: "Remo con mancuernas",
                descripcion: "Con una mancuerna en cada mano, inclina el torso hacia adelante manteniendo la espalda recta y sube las mancuernas hacia el torso, apretando los omóplatos.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Espalda",
                divisionRutina: "Pull"
            },
            {
                nombre: "Curl de bíceps con barra",
                descripcion: "Sujeta una barra con las manos a la altura de los hombros y realiza una flexión de codos para levantar la barra hacia el pecho.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Bíceps",
                divisionRutina: "Pull"
            },
            {
                nombre: "Curl martillo con mancuernas",
                descripcion: "Sujeta una mancuerna en cada mano con las palmas hacia el cuerpo. Levanta las mancuernas flexionando los codos sin girar las muñecas.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Bíceps",
                divisionRutina: "Pull"
            },
            {
                nombre: "Sentadilla con barra",
                descripcion: "Coloca una barra sobre tus hombros y baja el cuerpo flexionando las rodillas y caderas. Regresa a la posición inicial empujando hacia arriba.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Piernas",
                divisionRutina: "Legs"
            },
            {
                nombre: "Prensa de piernas",
                descripcion: "Siéntate en la máquina de prensa y coloca los pies en la plataforma. Empuja hacia arriba extendiendo las piernas y luego vuelve lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Piernas",
                divisionRutina: "Legs"
            },
            {
                nombre: "Elevación de cadera con barra",
                descripcion: "Siéntate en el suelo con la espalda en un banco y una barra sobre las caderas. Empuja hacia arriba levantando las caderas hasta que el cuerpo forme una línea recta desde los hombros hasta las rodillas.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Glúteos",
                divisionRutina: "Legs"
            },
            {
                nombre: "Curl de piernas en máquina",
                descripcion: "Siéntate en la máquina de curl y flexiona las piernas hacia atrás hasta contraer completamente los isquiotibiales.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Isquiotibiales",
                divisionRutina: "Legs"
            },
            {
                nombre: "Elevación de talones en máquina",
                descripcion: "Coloca los pies en la máquina de elevación de talones y levanta los talones mientras mantienes el peso en la punta de los pies.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Pantorrillas",
                divisionRutina: "Legs"
            },
            {
                nombre: "Press de pecho en banco plano con barra",
                descripcion: "Acuéstate en un banco plano y sujeta una barra con las manos un poco más abiertas que el ancho de los hombros. Empuja la barra hacia arriba hasta que los brazos estén completamente extendidos y luego baja lentamente hasta el pecho.",
                link: "",
                cantidadRepeticionesRecomendadas: 8,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Pecho",
                divisionRutina: "Push"
            },
            {
                nombre: "Press inclinado con mancuernas",
                descripcion: "Acuéstate en un banco inclinado y sujeta una mancuerna en cada mano. Empuja hacia arriba y hacia dentro hasta que los brazos estén completamente extendidos y luego baja lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Pecho",
                divisionRutina: "Push"
            },
            {
                nombre: "Press militar con barra",
                descripcion: "De pie o sentado, sujeta una barra a la altura de los hombros. Empuja la barra hacia arriba hasta que los brazos estén completamente extendidos y luego baja lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 8,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Hombros",
                divisionRutina: "Push"
            },
            {
                nombre: "Fondos para tríceps en paralelas",
                descripcion: "Colócate en las barras paralelas y baja el cuerpo flexionando los codos hasta sentir el estiramiento en el tríceps, luego sube hasta extender los brazos.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Tríceps",
                divisionRutina: "Push"
            },
            {
                nombre: "Extensión de tríceps en polea",
                descripcion: "Sujeta la cuerda de la polea alta con ambas manos y tira hacia abajo extendiendo los brazos, enfocándote en la contracción de los tríceps.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Tríceps",
                divisionRutina: "Push"
            },
            {
                nombre: "Peso muerto con barra",
                descripcion: "De pie, con la barra en el suelo frente a ti, inclínate y sujeta la barra con un agarre pronado. Levanta el peso manteniendo la espalda recta y luego baja controladamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 6,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Espalda baja",
                divisionRutina: "Pull"
            },
            {
                nombre: "Dominadas lastradas",
                descripcion: "Realiza dominadas agregando peso adicional. Mantén el control durante la subida y la bajada.",
                link: "",
                cantidadRepeticionesRecomendadas: 8,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Espalda superior",
                divisionRutina: "Pull"
            },
            {
                nombre: "Remo en barra T",
                descripcion: "Coloca una barra en una base de remo y sujeta las asas con ambas manos. Tira de la barra hacia el pecho manteniendo la espalda recta.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Espalda media",
                divisionRutina: "Pull"
            },
            {
                nombre: "Curl de bíceps en banco inclinado",
                descripcion: "Siéntate en un banco inclinado y realiza un curl con mancuernas, enfocándote en una contracción completa del bíceps.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Bíceps",
                divisionRutina: "Pull"
            },
            {
                nombre: "Curl de bíceps tipo martillo",
                descripcion: "Con una mancuerna en cada mano, realiza un curl manteniendo las palmas hacia el cuerpo para trabajar el braquiorradial.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Bíceps",
                divisionRutina: "Pull"
            },
            {
                nombre: "Sentadilla profunda con barra",
                descripcion: "Coloca una barra sobre tus hombros y realiza una sentadilla profunda, asegurándote de que las caderas bajen por debajo de las rodillas.",
                link: "",
                cantidadRepeticionesRecomendadas: 8,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Cuádriceps y glúteos",
                divisionRutina: "Legs"
            },
            {
                nombre: "Prensa de piernas",
                descripcion: "Siéntate en la máquina de prensa y coloca los pies en la plataforma. Empuja hacia arriba extendiendo las piernas y luego vuelve lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Piernas",
                divisionRutina: "Legs"
            },
            {
                nombre: "Peso muerto rumano con barra",
                descripcion: "Sujeta una barra con ambas manos y baja manteniendo las piernas semi-extendidas para activar los isquiotibiales y glúteos. Vuelve a la posición inicial.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Isquiotibiales y glúteos",
                divisionRutina: "Legs"
            },
            {
                nombre: "Elevación de talones en máquina",
                descripcion: "Coloca los pies en la máquina de elevación de talones y levanta los talones mientras mantienes el peso en la punta de los pies.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Pantorrillas",
                divisionRutina: "Legs"
            },
            {
                nombre: "Extensión de piernas en máquina",
                descripcion: "Siéntate en la máquina y extiende las piernas hasta que estén rectas. Mantén la contracción en la parte superior antes de bajar.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Cuádriceps",
                divisionRutina: "Legs"
            },
            {
                nombre: "Press de pecho en banco plano con mancuernas",
                descripcion: "Acuéstate en un banco plano y sujeta una mancuerna en cada mano. Empuja hacia arriba hasta extender los brazos y luego baja lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Pecho",
                divisionRutina: "Push"
            },
            {
                nombre: "Press inclinado con barra",
                descripcion: "Acuéstate en un banco inclinado y sujeta una barra con ambas manos. Empuja la barra hacia arriba y baja lentamente hacia el pecho.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Pecho",
                divisionRutina: "Push"
            },
            {
                nombre: "Elevación lateral con mancuernas",
                descripcion: "De pie, sujeta una mancuerna en cada mano y eleva los brazos lateralmente hasta la altura de los hombros. Baja lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 20,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Hombros",
                divisionRutina: "Push"
            },
            {
                nombre: "Extensión de tríceps en polea",
                descripcion: "Sujeta la cuerda de la polea alta y extiende los brazos hacia abajo para trabajar el tríceps. Regresa lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Tríceps",
                divisionRutina: "Push"
            },
            {
                nombre: "Press de hombros con mancuernas",
                descripcion: "Siéntate en un banco y sujeta una mancuerna en cada mano a la altura de los hombros. Empuja hacia arriba hasta extender los brazos.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Hombros",
                divisionRutina: "Push"
            },
            {
                nombre: "Jalón al pecho en polea",
                descripcion: "Siéntate en la máquina de polea y sujeta la barra con un agarre ancho. Tira de la barra hacia el pecho y luego vuelve lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Espalda",
                divisionRutina: "Pull"
            },
            {
                nombre: "Remo con mancuernas",
                descripcion: "Inclina el torso hacia adelante con una mancuerna en cada mano y realiza el movimiento de remo hacia el torso.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Espalda",
                divisionRutina: "Pull"
            },
            {
                nombre: "Pullover con mancuerna",
                descripcion: "Acuéstate en un banco con una mancuerna en ambas manos. Baja la mancuerna detrás de la cabeza y vuelve a la posición inicial.",
                link: "",
                cantidadRepeticionesRecomendadas: 20,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Espalda",
                divisionRutina: "Pull"
            },
            {
                nombre: "Curl de bíceps con mancuernas",
                descripcion: "De pie, sujeta una mancuerna en cada mano y realiza un curl completo hasta los hombros.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Bíceps",
                divisionRutina: "Pull"
            },
            {
                nombre: "Curl concentrado",
                descripcion: "Siéntate en un banco y apoya el codo sobre el muslo interno para realizar el curl de manera concentrada.",
                link: "",
                cantidadRepeticionesRecomendadas: 20,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Bíceps",
                divisionRutina: "Pull"
            },
            {
                nombre: "Sentadilla con barra",
                descripcion: "Coloca una barra sobre los hombros y baja flexionando las rodillas. Regresa a la posición inicial empujando hacia arriba.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Piernas",
                divisionRutina: "Legs"
            },
            {
                nombre: "Prensa de piernas",
                descripcion: "Siéntate en la máquina de prensa y coloca los pies en la plataforma. Empuja hacia arriba extendiendo las piernas y vuelve lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Piernas",
                divisionRutina: "Legs"
            },
            {
                nombre: "Elevación de cadera con barra",
                descripcion: "Coloca una barra sobre las caderas y eleva las mismas para trabajar los glúteos.",
                link: "",
                cantidadRepeticionesRecomendadas: 20,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Glúteos",
                divisionRutina: "Legs"
            },
            {
                nombre: "Extensión de piernas en máquina",
                descripcion: "Siéntate en la máquina de extensión y extiende las piernas hasta que estén completamente rectas.",
                link: "",
                cantidadRepeticionesRecomendadas: 20,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Cuádriceps",
                divisionRutina: "Legs"
            },
            {
                nombre: "Elevación de talones en máquina",
                descripcion: "Coloca los pies en la máquina de elevación de talones y levanta los talones mientras mantienes el peso en la punta de los pies.",
                link: "",
                cantidadRepeticionesRecomendadas: 20,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Pantorrillas",
                divisionRutina: "Legs"
            },
            {
                nombre: "Press de pecho en banco plano con barra",
                descripcion: "Acuéstate en un banco plano y sujeta la barra con un agarre ligeramente más amplio que el ancho de los hombros. Empuja hacia arriba y luego baja lentamente hasta el pecho.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Pecho",
                divisionRutina: "Push"
            },
            {
                nombre: "Press inclinado con mancuernas",
                descripcion: "Acuéstate en un banco inclinado y sujeta una mancuerna en cada mano. Empuja hacia arriba y luego baja lentamente hacia el pecho.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Pecho",
                divisionRutina: "Push"
            },
            {
                nombre: "Press militar con barra",
                descripcion: "De pie o sentado, sujeta la barra a la altura de los hombros. Empuja hacia arriba hasta que los brazos estén completamente extendidos y luego baja.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Hombros",
                divisionRutina: "Push"
            },
            {
                nombre: "Fondos en paralelas",
                descripcion: "Con las manos en barras paralelas, baja el cuerpo flexionando los codos y luego sube hasta la extensión completa de los brazos.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Tríceps",
                divisionRutina: "Push"
            },
            {
                nombre: "Elevaciones laterales",
                descripcion: "Sujeta una mancuerna en cada mano y eleva los brazos hacia los lados hasta la altura de los hombros. Baja lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Hombros",
                divisionRutina: "Push"
            },
            {
                nombre: "Dominadas",
                descripcion: "Cuélgate de la barra con un agarre ancho y realiza una tracción hasta que la barbilla pase la barra, luego baja controladamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 8,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Espalda",
                divisionRutina: "Pull"
            },
            {
                nombre: "Remo con barra",
                descripcion: "Con una barra, inclina el torso hacia adelante y realiza un remo hacia el abdomen.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Espalda media",
                divisionRutina: "Pull"
            },
            {
                nombre: "Face pull con cuerda",
                descripcion: "En la polea alta, tira de la cuerda hacia la cara mientras mantienes los codos altos para trabajar la espalda y el deltoides posterior.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Espalda alta",
                divisionRutina: "Pull"
            },
            {
                nombre: "Curl de bíceps con barra",
                descripcion: "De pie, sujeta una barra con las palmas hacia arriba y realiza un curl hasta los hombros.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Bíceps",
                divisionRutina: "Pull"
            },
            {
                nombre: "Curl martillo con mancuernas",
                descripcion: "De pie, con una mancuerna en cada mano, realiza un curl manteniendo las palmas hacia el cuerpo.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Bíceps",
                divisionRutina: "Pull"
            },
            {
                nombre: "Sentadilla con barra",
                descripcion: "Coloca una barra sobre los hombros y baja el cuerpo flexionando las rodillas. Empuja hacia arriba para volver a la posición inicial.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Cuádriceps y glúteos",
                divisionRutina: "Legs"
            },
            {
                nombre: "Prensa de piernas",
                descripcion: "Siéntate en la máquina de prensa y coloca los pies en la plataforma. Empuja extendiendo las piernas y vuelve lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Piernas",
                divisionRutina: "Legs"
            },
            {
                nombre: "Peso muerto rumano",
                descripcion: "Sujeta una barra y baja manteniendo las piernas semi-extendidas para trabajar los isquiotibiales y glúteos.",
                link: "",
                cantidadRepeticionesRecomendadas: 10,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Isquiotibiales y glúteos",
                divisionRutina: "Legs"
            },
            {
                nombre: "Elevación de talones en máquina",
                descripcion: "Coloca los pies en la máquina y levanta los talones mientras mantienes el peso en la punta de los pies.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Pantorrillas",
                divisionRutina: "Legs"
            },
            {
                nombre: "Elevación de cadera con barra",
                descripcion: "Acuéstate en el suelo con la espalda alta apoyada en un banco y una barra sobre las caderas. Eleva las caderas hasta formar una línea recta desde los hombros hasta las rodillas.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Glúteos",
                divisionRutina: "Legs"
            },
            {
                nombre: "Press de pecho con mancuernas en banco inclinado",
                descripcion: "Acuéstate en un banco inclinado con una mancuerna en cada mano. Empuja hacia arriba hasta extender los brazos y baja lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Pecho",
                divisionRutina: "Push"
            },
            {
                nombre: "Flexiones de pecho",
                descripcion: "Con las manos en el suelo a la altura del pecho, baja el cuerpo hasta que el pecho toque el suelo y vuelve a la posición inicial.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Pecho",
                divisionRutina: "Push"
            },
            {
                nombre: "Elevaciones laterales con mancuernas",
                descripcion: "De pie, sujeta una mancuerna en cada mano y eleva los brazos lateralmente hasta la altura de los hombros. Baja lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 20,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Hombros",
                divisionRutina: "Push"
            },
            {
                nombre: "Fondos en banco",
                descripcion: "Coloca las manos en un banco detrás de ti, baja el cuerpo flexionando los codos y vuelve a la posición inicial.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Tríceps",
                divisionRutina: "Push"
            },
            {
                nombre: "Press militar con mancuernas",
                descripcion: "Sujeta una mancuerna en cada mano a la altura de los hombros y empuja hacia arriba hasta extender los brazos.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Hombros",
                divisionRutina: "Push"
            },
            {
                nombre: "Jalón al pecho en polea",
                descripcion: "Siéntate en la máquina de polea y sujeta la barra con un agarre ancho. Tira de la barra hacia el pecho y vuelve lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Espalda",
                divisionRutina: "Pull"
            },
            {
                nombre: "Remo con mancuerna a una mano",
                descripcion: "Apoya una rodilla en el banco, sujeta una mancuerna y lleva el codo hacia el torso para trabajar la espalda.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Espalda",
                divisionRutina: "Pull"
            },
            {
                nombre: "Pull over con mancuerna",
                descripcion: "Acuéstate en un banco y sujeta una mancuerna con ambas manos. Baja la mancuerna detrás de la cabeza y vuelve a la posición inicial.",
                link: "",
                cantidadRepeticionesRecomendadas: 20,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Espalda",
                divisionRutina: "Pull"
            },
            {
                nombre: "Curl de bíceps en polea",
                descripcion: "Sujeta la barra de la polea baja y realiza un curl hacia los hombros, manteniendo los codos cerca del torso.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Bíceps",
                divisionRutina: "Pull"
            },
            {
                nombre: "Curl martillo alternado",
                descripcion: "Con una mancuerna en cada mano, realiza un curl alternado manteniendo las palmas hacia el torso.",
                link: "",
                cantidadRepeticionesRecomendadas: 20,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Bíceps",
                divisionRutina: "Pull"
            },
            {
                nombre: "Sentadilla goblet",
                descripcion: "Sujeta una mancuerna frente al pecho y realiza una sentadilla manteniendo el torso recto y el core contraído.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Piernas y glúteos",
                divisionRutina: "Legs"
            },
            {
                nombre: "Prensa de piernas",
                descripcion: "Siéntate en la máquina de prensa y coloca los pies en la plataforma. Empuja extendiendo las piernas y vuelve lentamente.",
                link: "",
                cantidadRepeticionesRecomendadas: 12,
                cantidadSeriesRecomendadas: 4,
                musculoAfectado: "Piernas",
                divisionRutina: "Legs"
            },
            {
                nombre: "Zancadas con mancuernas",
                descripcion: "Con una mancuerna en cada mano, da un paso hacia adelante y baja hasta que ambas rodillas formen un ángulo de 90 grados.",
                link: "",
                cantidadRepeticionesRecomendadas: 20,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Piernas",
                divisionRutina: "Legs"
            },
            {
                nombre: "Peso muerto rumano",
                descripcion: "Con una barra o mancuernas, baja el peso hacia el suelo mientras mantienes las piernas semi-extendidas.",
                link: "",
                cantidadRepeticionesRecomendadas: 15,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Isquiotibiales y glúteos",
                divisionRutina: "Legs"
            },
            {
                nombre: "Elevación de talones",
                descripcion: "Con las puntas de los pies en un borde elevado, levanta los talones para trabajar las pantorrillas.",
                link: "",
                cantidadRepeticionesRecomendadas: 20,
                cantidadSeriesRecomendadas: 3,
                musculoAfectado: "Pantorrillas",
                divisionRutina: "Legs"
            }
    ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Ejercicios', null, {});
    }
};