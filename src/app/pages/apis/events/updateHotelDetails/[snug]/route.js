import { NextResponse } from "next/server";
import { updateHotelDetails } from "../../../../controllers/event.controller";


export const PUT = async (req, {params}) => {
    const {snug} = await params;
    try {
        await updateHotelDetails(req,snug);
        return NextResponse.json({
            status: 200,
            message: "Hotel details updated successfully"
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        })
    }
}