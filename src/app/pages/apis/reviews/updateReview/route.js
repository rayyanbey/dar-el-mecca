import { updateReview } from "../../../controllers/review.controller";

export const PUT = async(req,res)=>{
    return await updateReview(req,res);
}