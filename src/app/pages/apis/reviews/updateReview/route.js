import { updateReview } from "../../../controllers/review.controller";

export const POST = async(req,res)=>{
    return await updateReview(req,res);
}