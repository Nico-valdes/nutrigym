const express = require('express');
const cors = require('cors');

// Importacion de rutas
const usuarioRoutes = require('./routes/usuarioRoutes.js');
const rutinaRoutes = require('./routes/rutinaRoutes.js');
const rutinaTieneEjerciciosRoutes= require('./routes/rutinaTieneEjerciciosRoutes.js');
const planAlimenticioRoutes = require('./routes/planAlimenticioRoutes.js');
const planAlimenticioTienePlatillosRoutes = require('./routes/planAlimenticioTienePlatillosRoutes.js');
const platilloRoutes = require('./routes/platilloRoutes.js');
const rolRoutes = require('./routes/rolRoutes.js');
const registroDeSesionRoutes = require('./routes/registroDeSesionRoutes.js');
const ejercicosRoutes = require('./routes/ejerciciosRoutes.js');
const rutinaPdfRoutes = require('./routes/rutinaPdfRoutes.js');

const PORT = process.env.SERVER_PORT;
const app = express();

// Configuracion de CORS
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/rutinas', rutinaRoutes);
app.use('/rutinas-tiene-ejercicios', rutinaTieneEjerciciosRoutes);
app.use('/planes-alimenticios', planAlimenticioRoutes);
app.use('/planes-alimenticios-tiene-platillos', planAlimenticioTienePlatillosRoutes);
app.use('/roles', rolRoutes);
app.use('/platillos', platilloRoutes);
app.use('/registros-de-sesiones', registroDeSesionRoutes);
app.use('/ejercicios', ejercicosRoutes);
app.use('/rutinas-pdf', rutinaPdfRoutes);

app.listen(PORT, () => {
    console.log('Server on port', PORT);
});