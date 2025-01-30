import { NextResponse } from "next/server";
import { updateHotelDetails } from "../../../../controllers/event.controller";


export const PUT = async (req, {params}) => {
    const {snug} = await params;
    try {
        return await updateHotelDetails(req,snug);
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        })
    }
}