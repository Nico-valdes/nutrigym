const express = require('express');
const {
    getAll,
    getById,
    create,
    update,
    destroy
} = require('../controllers/rutinaPdfController');

const router = express.Router();

router.get('/obtener-todos', getAll);
router.get('/obtener-por-id/:id', getById);
router.post('/crear', create);
router.put('/actualizar/:id', update);
router.delete('/eliminar/:id', destroy);

module.exports = router;