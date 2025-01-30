import { NextResponse } from "next/server"
import { getAllHotels } from "../../../../controllers/event.controller"


export const GET = async (req, {params}) => {
    try {
        const {snug} = await params
        return await getAllHotels(req,snug)
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message
        })
    }
}