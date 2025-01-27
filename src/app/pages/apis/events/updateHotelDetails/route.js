import { NextResponse } from "next/server"
import { updateHotelDetails } from "../../../controllers/event.controller"



export const PUT = async (req, res) => {
    try {
        const data =  await updateHotelDetails(req, res);
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message
        })
    }
}