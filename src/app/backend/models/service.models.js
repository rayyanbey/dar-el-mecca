import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{timestamps: true});

const Service = mongoose.model('Service',ServiceSchema);
export default Service;