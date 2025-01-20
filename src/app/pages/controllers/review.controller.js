import { NextResponse } from "next/server";
import Review from "../models/review.models";
import { json } from "sequelize";

//get all reviews
const getReviews = async(req,res)=>{
    try{
        const reviews = await Review.findAll();
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
   try {
    await Review.update({
        name: name,
        review: review,
        profession: profession
    },{
        where:{
            name: name,
            review: review,
            profession: profession
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
  const name = req.body.name;
    const review = req.body.review;
    const profession = req.body.profession;
    try {
        await Review.destroy({
            where:{
                name: name,
                review: review,
                profession: profession
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

export{
    getReviews,
    updateReview,
    deleteReview
}