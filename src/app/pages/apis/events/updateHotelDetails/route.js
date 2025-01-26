import { NextResponse } from "next/server"
import { updateHotelDetails } from "../../../controllers/event.controller"



export const PUT = async (req, res) => {
    try {
        return await updateHotelDetails(req, res);
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message
        })
    }
}