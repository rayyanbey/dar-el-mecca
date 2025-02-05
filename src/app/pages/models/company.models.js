import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig';
import BusinessHours from './businessHours.models';
import ContactInformation from './contactInfo.models';

// Define Company model
const Company = sequelize.define('Company', {
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    documentAddress: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'companies'
});

// Define relationships
Company.hasOne(ContactInformation, { foreignKey: 'companyId', as: 'contactInformation' });
Company.hasOne(BusinessHours, { foreignKey: 'companyId', as: 'businessHours' });

export default Company;
