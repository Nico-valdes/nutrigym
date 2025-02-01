const {
    obtenerPorId,
    obtenerTodos,
    crear,
    actualizar,
    eliminar
} = require('../services/rutinaPdfService');


//_________Obtener una rutina pdf por su ID_______________________________
const getById = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const rutinaPdf = await obtenerPorId(id);

        res.status(200).json(rutinaPdf);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener la rutina pdf:', error });
    }
};


//_________Obtener todas las rutinas pdf__________________________________
const getAll = async (req, res) => {
    try {
        const rutinasPdfs = await obtenerTodos();
    
        if (rutinasPdfs.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado rutinas pdf.' });
        }

        res.status(200).json(rutinasPdfs);
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al obtener las rutinas pdf:', error });
    }
};


//_________Crear una rutina pdf_____________________________________
const create = async (req, res) => {
    const { pdf, nombre } = req.body;

    if (!pdf) {
        return res.status(400).json({ message: 'La URL del PDF es requerida.' });
    }

    if (!nombre) {
        return res.status(400).json({ message: 'El nombre del PDF es requerido.' });
    }

    try {
        const rutinaPdf = await crear(req.body);

        if (!rutinaPdf) {
            throw new Error('Error al crear la rutina PDF.');
        }

        res.status(201).json({
            message: 'Rutina pdf creada con éxito',
            id: rutinaPdf.id,
            rutinaPdf: {
                pdf: rutinaPdf.pdf,
                nombre: rutinaPdf.nombre
            }
        });
    } catch (error) {
        console.error('Error al guardar el PDF:', error);
        res.status(500).json({ 
            message: 'Se ha producido un error al crear la rutina PDF',
            error: error.message 
        });
    }
};


//_________Actualizar datos de una rutina pdf_____________________________
const update = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = await actualizar(id, req.body);

        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido actualizar los datos de la rutina pdf.' });
        }

        res.status(200).json({ message: 'Rutina pdf actualizada con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al actualizar los datos de la rutina pdf:', error });
    }
};


//_________Eliminar una rutina pdf________________________________________
const destroy = async (req, res) => {
    const { id } = req.params;
    
    if (!id) return res.status(500).json({ message: 'Debe ingresar un id por parámetro.' });

    try {
        const resultado = await eliminar(id);

        if (resultado === 0) {
            return res.status(404).json({ message: 'No se ha podido encontrar la rutina pdf.' });
        }

        res.status(200).json({ message: 'Rutina pdf eliminada con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Se ha producido un error al eliminar la rutina pdf:', error });
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    destroy
};