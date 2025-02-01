const express = require('express');
const {
    getById,
    getAll,
    getAllByPalabra,
    create,
    update,
    destroy
} = require('../controllers/ejercicioController');

const router = express.Router();

router.get('/obtener-todos', getAll);
router.get('/obtener-todos-por-nombre-con-palabra/:palabra', getAllByPalabra);
router.get('/obtener-por-id/:id', getById);
router.post('/crear', create);
router.put('/actualizar/:id', update);
router.delete('/eliminar/:id', destroy);

module.exports = router;