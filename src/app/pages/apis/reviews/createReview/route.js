import { NextResponse } from "next/server";
import { createReview } from "../../../controllers/review.controller";

export async function POST(req) {
    try {
        const response = await createReview(req);
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Error while creating review",
            error: error.message
        });
    }
}