import { NextResponse } from "next/server";
import Review from "../models/review.models";
import { json } from "sequelize";
import { uploadToCloudinary } from "../utils/cloudinary";


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

    const body = await req.json()
   const name = body.name;
    const review = body.review;
    const profession = body.profession;
    const rating = body.rating;
    const id = body.id;

    if(!id){
        return NextResponse.json({
            status: 400,
            message: "Review ID is required"
        })
    }

   try {
    await Review.update({
        name: name,
        review: review,
        profession: profession,
        rating: rating
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


const deleteReview = async(req)=>{

    const body = await req.json()
    const id = body.id
    console.log(id)
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
    try {
        const formData = await req.formData();
        
        const name = formData.get('name');
        const review = formData.get('review');
        const profession = formData.get('profession');
        const rating = formData.get('rating');
        const image = formData.get('image');

        let imageURL = null;
        if (image) {
           imageURL = await uploadToCloudinary(image);
        }

        await Review.create({
            name,
            review,
            profession,
            rating,
            image: imageURL
        });

        return {
            status: 200,
            message: "Review created successfully"
        };
    } catch (error) {
        return {
            status: 500,
            message: "An error occurred while creating review",
            error: error.message
        };
    }
}
export{
    getReviews,
    updateReview,
    deleteReview,
    createReview
}