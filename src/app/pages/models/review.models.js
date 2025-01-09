import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig';

const Review = sequelize.define('Review', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    review: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profession: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true // image is optional
    }
}, {
    timestamps: true
});

export default Review;
