import { updateReview } from "../../../controllers/review.controller";

export const PUT = async(req,res)=>{
    try {
        return await updateReview(req,res);
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "An error occured while updating review",
            error: error
        })
    }
}