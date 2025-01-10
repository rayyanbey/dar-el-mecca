import sequelize from "../config/dbConfig";
import Event from "../models/event.models";
import ContactInformation from "../models/contactInfo.models";
import BusinessHours from "../models/businessHours.models";
import Company from "../models/company.models";
import Review from "../models/review.models";
import Service from "../models/service.models";

const initializeDatabase = async () => {
    try {
        await sequelize.authenticate(); // Test connection
        console.log('Database connection established.');
        await sequelize.sync({ alter: true }); // Synchronize models
        console.log('Database synchronized.');
    } catch (error) {
        console.error('Failed to initialize database:');
    }
};

export default initializeDatabase
