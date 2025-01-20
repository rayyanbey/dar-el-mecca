import { deleteReview } from "../../../controllers/review.controller";

export const DELETE = async (req, res) => {
    return await deleteReview(req, res)
}