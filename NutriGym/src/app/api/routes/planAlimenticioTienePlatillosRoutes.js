const express = require('express');
const {
    getById,
    getAll,
    getAllByIdPlanAlimenticio,
    getAllPlatillosByIdPlanAlimenticio,
    create,
    update,
    destroy
} = require('../controllers/planAlimenticioTienePlatillosController');

const router = express.Router();

router.get('/obtener-todos', getAll);
router.get('/obtener-todos-platillos-por-id-plan-alimenticio/:id', getAllPlatillosByIdPlanAlimenticio);
router.get('/obtener-todos-por-id-plan-alimenticio/:id', getAllByIdPlanAlimenticio);
router.get('/:id', getById);
router.post('/crear', create);
router.put('/actualizar/:id', update);
router.delete('/eliminar/:id', destroy);

module.exports = router;