import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig';

const Service = sequelize.define('Service', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

export default Service;
