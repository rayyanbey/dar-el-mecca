import { deleteReview } from "../../../controllers/review.controller";
import { NextResponse } from "next/server";

export const DELETE = async (req) => {
    try {
        return await deleteReview(req);
       
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Error while deleting review",
            error: error.message
        });
    }
}