import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig';
export const Flight = sequelize.define('Flight', {
    departureCity: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 100]
        }
    },
    destinationCity: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 100]
        }
    },
    departureDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isAfter: new Date().toISOString().split('T')[0]
        }
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isValidDate(value) {
                if (value <= this.departureDate) {
                    throw new Error("Return date must be after the departure date");
                }
            }
        }
    }
}, { timestamps: true });

// Hotel model
export const Hotel = sequelize.define('Hotel', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 100]
        }
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 100]
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [10, 1000]
        }
    },
    images: {
        type: DataTypes.JSON, // Storing images as a JSON array
        allowNull: false,
        validate: {
            notEmpty(value) {
                if (!Array.isArray(value) || value.length === 0) {
                    throw new Error("At least one image is required");
                }
            }
        }
    }
}, { timestamps: true });

// EventDetails model
export const EventDetails = sequelize.define('EventDetails', {
    inclusion: {
        type: DataTypes.JSON,
        allowNull: false
    },
    exclusion: {
        type: DataTypes.JSON,
        allowNull: false
    },
    transportation: {
        type: DataTypes.JSON,
        allowNull: true
    }
}, { timestamps: false });

// Event model
const Event = sequelize.define('Event', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [5, 150]
        }
    },
    images: {
        type: DataTypes.JSON,
        allowNull: false,
        validate: {
            notEmpty(value) {
                if (!Array.isArray(value) || value.length < 3) {
                    throw new Error("At least three images are required");
                }
            }
        }
    },
    bigDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [20, 2000]
        }
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['H', 'U', 'T']]
        }
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 365
        }
    },
    pricing: {
        type: DataTypes.JSON,
        allowNull: false,
        validate: {
            isValidPricing(value) {
                if (!value || typeof value !== 'object' || Object.keys(value).length === 0) {
                    throw new Error("Pricing must be a non-empty object");
                }
            }
        }
    },
    visa: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['Y', 'N', 'Fee']]
        }
    },
    tagline: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 2000]
        }
    },
    titleToDisplay:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 2000]
        }
    },
    miniDescription:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 2000]
        }
    },
    bigDescriptionTitle:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 2000]
        }
    }
}, { timestamps: true });

// Associations
EventDetails.hasMany(Hotel, { as: 'hotels', foreignKey: 'eventDetailsId' });
Hotel.belongsTo(EventDetails, { foreignKey: 'eventDetailsId' });

Event.hasOne(EventDetails, { as: 'eventDetails', foreignKey: 'eventId' });
EventDetails.belongsTo(Event, { foreignKey: 'eventId' });

Event.hasOne(Flight, { as: 'flightDetails', foreignKey: 'eventId' });
Flight.belongsTo(Event, { foreignKey: 'eventId' });

export default Event