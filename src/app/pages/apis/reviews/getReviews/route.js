import { getReviews } from "../../../controllers/review.controller";

export const GET = async (req, res) => {
    return await getReviews(req, res)
}