import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig';

const ContactInformation = sequelize.define('ContactInformation', {
    phoneNumbers: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    email: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    faxNumbers: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'contact_information'
});

export default ContactInformation;
