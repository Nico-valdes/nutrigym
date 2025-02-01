const express = require('express');
const {
    validarRegistro,
    capitalizarNombres
} = require('../middleware/userMiddlewares');
const {
    getById,
    getByEmail,
    getAll,
    getAllByNombreWithPalabra,
    create,
    update,
    destroy
} = require('../controllers/usuarioController');


const router = express.Router();

router.get('/obtener-todos', getAll);
router.get('/obtener-todos-por-nombre-con-palabra/:palabra', getAllByNombreWithPalabra);
router.get('/obtener-por-email/:email', getByEmail);
router.get('/obtener-por-id/:id', getById);
router.post('/registrar', validarRegistro, capitalizarNombres, create);
router.put('/actualizar/:id', update);
router.delete('/eliminar/:id', destroy);

module.exports = router;