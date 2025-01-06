import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    profession:{
        type:Number,
        required:true
    },
    image:{
        type: String
    }
},{timestamps: true});


const Review = mongoose.model('Review',ReviewSchema);
export default Review