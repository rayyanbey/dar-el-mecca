import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig';

const ContactInformation = sequelize.define('ContactInformation', {
    phoneNumbers: {
        type: DataTypes.JSON,
        allowNull: false
    },
    email: {
        type: DataTypes.JSON,
        allowNull: false
    },
    faxNumbers: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'contact_information'
});

export default ContactInformation;
