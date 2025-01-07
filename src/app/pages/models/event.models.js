import mongoose from "mongoose";

//partial flight schema
const flightSchema = new mongoose.Schema({
    departureCity:{
        type:String,
        required:true
    },
    destinationCity:{
        type:String,
        required:true
    },
    departureDate:{
        type:Date,
        required:true
    },
    returnDate:{
        type:Date,
        required:true
    }
},{timestamps: true});

//partial hotel schema
const hotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:Date,
        required:true
    },
    images:{
        type:[String],
        required:true
    }
},{timestamps: true});

//partial event details schema
const eventDetailsSchema = new mongoose.Schema({
    inclusion:{
        type:Object,
        required:true
    },
    exclusion:{
        type:Object,
        required:true
    },
    hotels:{
        type:[hotelSchema],
        required:true
    },
    transportation:{
        type:Object,
        required:true
    }
},{timestamps: true});



//main event schema
const eventSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    month:{
        type: String,
        required: true
    },
    images:{
        type: [String],
        required: true
    },
    description:{
        type: String,
        required: true
    },
    type:{
        type: String,
        enum:['H','U','T'],
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    pricing:{
        type: Object,
        required: true
    },
    visa:{
        type: String,
        enum:['Y','N','Fee'],
        required: true
    },
    eventDetails:{
        type: eventDetailsSchema,
        required: true
    },
    flightDetails:{
        type: flightSchema,
        required: true
    },
    tagline:{
        type:String,
        required:true
    }
},{timeStamp: true});

const Event = mongoose.model('Event',eventSchema);
export default Event;