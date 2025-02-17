import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig';


const Flight = sequelize.define('Flight', {
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
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isAfter: new Date().toISOString()
        }
    },
    type:{
        type:DataTypes.ENUM('Departure','Return'),
        allowNull:false
    }
}, { timestamps: true });

// Hotel model
 const Hotel = sequelize.define('Hotel', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 100]
        }
    },
    locationDescription: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [10, 1000]
        }
    },
    accomodationDescription:{
        type:DataTypes.STRING,
        allowNull:true
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
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false,
    }
}, { timestamps: true });

// EventDetails model
 const EventDetails = sequelize.define('EventDetails', {
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
    title: {  //Navigation title
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [5, 150]
        },
    },
    images: {  //background images etc
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
    description: { //the only description which is custom on the page
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [20, 2000]
        }
    },
    type: {  //category of the event
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['H', 'U', 'T']]
        }
    },
    countryName: { 
        type: DataTypes.STRING,
        allowNull: true, // Conditional requirement just for tour package
        validate: {
            len: [2, 100]
        },
        set(value) {
            if (this.type === 'T' && (!value || value.trim() === '')) {
                throw new Error("Country name is required for type 'T'");
            }
            this.setDataValue('countryName', value);
        }
    },
    poster:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    duration: { //duration of the event i.e nights
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 365
        }
    },
    pricing: { //pricing of the event
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
    visa: { //visa required or not or just fee
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['Y', 'N', 'Fee']]
        }
    },
    descriptionTitle: { //title of the description
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 2000]
        }
    },
    importantNote:{  //important notes for customers
        type: DataTypes.STRING,
        allowNull:true,
    },
    month:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[3,100]
        }
    }
}, { timestamps: true });


// Associations
EventDetails.hasMany(Hotel, { as: 'hotels', foreignKey: 'eventDetailsId' });
Hotel.belongsTo(EventDetails, { foreignKey: 'eventDetailsId' });

Event.hasOne(EventDetails, { as: 'eventDetails', foreignKey: 'eventId' });
EventDetails.belongsTo(Event, { foreignKey: 'eventId' });

Event.hasMany(Flight, { as: 'flightDetails', foreignKey: 'eventId' });
Flight.belongsTo(Event, { foreignKey: 'eventId' });

export {
    Event,
    Flight,
    Hotel,
    EventDetails
}