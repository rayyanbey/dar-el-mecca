import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2'
require('dotenv').config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,
    {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    dialectModule: mysql2,
    dialectOptions: {
        ssl: {
            require: false,
            rejectUnauthorized: false, // Adjust as needed for your SSL setup
        },
    },
    logging: false, 
});

export default sequelize;
