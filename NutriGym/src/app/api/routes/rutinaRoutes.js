const express = require('express');
const {
    getById,
    getByNombre,
    getAll,
    getAllByNombreWithPalabra,
    create,
    update,
    destroy
} = require('../controllers/rutinaController')

const router = express.Router();

router.get('/obtener-todos', getAll);
router.get('/obtener-todos-por-nombre-con-palabra/:palabra', getAllByNombreWithPalabra);
router.get('/obtener-por-id/:id', getById);
router.get('/obtener-por-nombre/:nombre', getByNombre);
router.post('/crear', create);
router.put('/actualizar/:id', update);
router.delete('/eliminar/:id', destroy);

module.exports = router;