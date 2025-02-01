const express = require('express');
const {
    getById,
    getAll,
    getAllEjerciciosByIdRutina,
    getAllByIdRutina,
    create,
    update,
    destroy
} = require('../controllers/rutinaTieneEjerciciosController');

const router = express.Router();

router.get('/obtener-todos', getAll);
router.get('/obtener-todos-ejercicios-por-id-rutina/:id', getAllEjerciciosByIdRutina);
router.get('/obtener-todos-por-id-rutina/:id', getAllByIdRutina);
router.get('/:id', getById);
router.post('/crear', create);
router.put('/actualizar/:id', update);
router.delete('/eliminar/:id', destroy);

module.exports = router;