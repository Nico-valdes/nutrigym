const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    protocol: 'postgres',
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('La conexión a la base de datos se ha realizado con éxito.');
    } catch (error) {
        console.error('No ha sido posible conectarse a la base de datos:', error);
    }
};

module.exports = { sequelize, connectDB };
