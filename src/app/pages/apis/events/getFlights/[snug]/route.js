import { NextResponse } from "next/server"
import { getAllFlights} from "../../../../controllers/event.controller"
export const GET = async (req, {params}) => {
    try {
        const {snug} = await params
        return await getAllFlights(req,snug)
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message
        })
    }
}