import mongoose from "mongoose";

// Partial flight schema with validations
const flightSchema = new mongoose.Schema({
    departureCity: {
        type: String,
        required: true,
        minlength: 2, // Minimum length for city name
        maxlength: 100 // Maximum length for city name
    },
    destinationCity: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    departureDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value >= new Date(); // Ensure departure date is not in the past
            },
            message: "Departure date must be in the future"
        }
    },
    returnDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return this.departureDate <= value; // Ensure return date is after departure
            },
            message: "Return date must be after the departure date"
        }
    }
}, { timestamps: true });

// Partial hotel schema with validations
const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    location: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    description: {
        type: String, // Changed to String (as description should not be a Date)
        required: true,
        minlength: 10,
        maxlength: 1000
    },
    images: {
        type: [String],
        required: true,
        validate: {
            validator: function(value) {
                return value.length > 0; // Ensure at least one image is provided
            },
            message: "At least one image is required"
        }
    }
}, { timestamps: true });

// Partial event details schema with validations
const eventDetailsSchema = new mongoose.Schema({
    inclusion: {
        type: Object,
        required: true
    },
    exclusion: {
        type: Object,
        required: true
    },
    hotels: {
        type: [hotelSchema],
        required: true,
        validate: {
            validator: function(value) {
                return value.length > 0; // Ensure at least one hotel is included
            },
            message: "At least one hotel is required"
        }
    },
    transportation: {
        type: Object,
        required: true
    }
}, { timestamps: true });

// Main event schema with validations
const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 150
    },
    month: {
        type: String,
        required: true,
        match: /^(January|February|March|April|May|June|July|August|September|October|November|December)$/ // Strict month validation
    },
    images: {
        type: [String],
        required: true,
        validate: {
            validator: function(value) {
                return value.length > 2; // Ensure at least 3 images are provided
            },
            message: "At least one image is required"
        }
    },
    description: {
        type: String,
        required: true,
        minlength: 20,
        maxlength: 2000
    },
    type: {
        type: String,
        enum: ['H', 'U', 'T'],
        required: true
    },
    duration: {
        type: Number,
        required: true,
        min: 1, // Minimum duration is 1 day
        max: 365 // Maximum duration is 1 year
    },
    pricing: {
        type: Object,
        required: true,
        validate: {
            validator: function(value) {
                return value && typeof value === 'object' && Object.keys(value).length > 0;
            },
            message: "Pricing must be a non-empty object"
        }
    },
    visa: {
        type: String,
        enum: ['Y', 'N', 'Fee'],
        required: true
    },
    eventDetails: {
        type: eventDetailsSchema,
        required: true
    },
    flightDetails: {
        type: flightSchema,
        required: true
    },
    tagline: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 200
    }
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);
export default Event;
