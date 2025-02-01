const { check, validationResult } = require('express-validator');

validarRegistro = [
    check('email')
        .isEmail()
        .withMessage('Debe ser un email válido.'),
    check('contrasenia')
        .isLength({ min: 4 })
        .withMessage('La contraseña debe tener al menos 4 caracteres.'),
    check('contrasenia')
        .isLength({ max: 20 })
        .withMessage('La contraseña debe tener como máximo 20 caracteres.'),
    (req, res, next) => {
        const errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.status(400).json({ errores: errores.array() });
        }
        next();
    },
];
  
const capitalizarNombres = (req, res, next) => {
    const { nombre } = req.body
    const { apellido } = req.body

    req.body.nombre = capitalizeWords(nombre);
    req.body.apellido = capitalizeWords(apellido);

    next();
};

function capitalizeWords(text) {
    return text
        .split(' ')
        .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ');
}

module.exports = {
    validarRegistro,
    capitalizarNombres
}