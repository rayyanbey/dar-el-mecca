import { NextResponse } from "next/server"
import { getAllDetails } from "../../../../controllers/event.controller"


export const GET = async (req, {params}) => {
    try {
        const {snug} = await params
        return await getAllDetails(req,snug)
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message
        })
    }
}