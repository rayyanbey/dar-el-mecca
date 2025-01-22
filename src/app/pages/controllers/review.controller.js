import { NextResponse } from "next/server";
import Review from "../models/review.models";
import { json } from "sequelize";
import { uploadImageToThirdParty } from "../utils/cloudinary";


//APIS
//   `https://localhost:3000/pages/apis/reviews/getReviews`
//  `https://localhost:3000/pages/apis/reviews/updateReview`
// `https://localhost:3000/pages/apis/reviews/deleteReview`
//  `https://localhost:3000/pages/apis/reviews/createReview`
//get all reviews
const getReviews = async(req,res)=>{
    try{
        const reviews = await Review.findAll({
            attributes: ['id','name','review','profession','image','rating']
        })
        if(reviews.length === 0){
            return NextResponse,json({
                status: 404,
                message: "No reviews found",
            })
        }

        return NextResponse.json({
            status: 200,
            message: "Reviews fetched successfully",
            data: reviews
        })
    }
    catch(error){
        return NextResponse.json({
            status: 500,
            message: "An error occured while fetching reviews",
            error: error
        })
    }
}


const updateReview = async(req,res)=>{
   const name = req.body.name;
    const review = req.body.review;
    const profession = req.body.profession;
    const id = req.body.id;
   try {
    await Review.update({
        name: name,
        review: review,
        profession: profession
    },{
        where:{
            id: id
        }
    })

    return NextResponse.json({
        status: 200,
        message: "Review updated successfully"
    })
   } catch (error) {
     return NextResponse.json({
         status: 500,
         message: "An error occured while updating review",
         error: error
     })
   }
}


const deleteReview = async(req,res)=>{
    const id = req.body.id;
    try {
        await Review.destroy({
            where:{
                id:id
            }
        })
        return NextResponse.json({
            status: 200,
            message: "Review deleted successfully"
        })
    }
    catch(error){
        return NextResponse.json({
            status: 500,
            message: "An error occured while deleting review",
            error: error
        })
    }
}

const createReview = async(req,res)=>{
    const name = req.body.name;
    const review = req.body.review;
    const profession = req.body.profession;

    //get image from multer
    const image = req.file;
    if(!image){
        return NextResponse.json({
            status: 400,
            message: "Please upload an image"
        })
    }
    //gettting url from third party storage
    const imageURL = uploadImageToThirdParty(image);

    if(!imageURL){
        return NextResponse.json({
            status: 500,
            message: "An error occured while uploading image"
        })
    }
    try {
        await Review.create({
            name: name,
            review: review,
            profession: profession,
            image: imageURL
        })
        return NextResponse.json({
            status: 200,
            message: "Review created successfully"
        })
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "An error occured while creating review",
            error: error
        })
    }
}
export{
    getReviews,
    updateReview,
    deleteReview,
    createReview
}