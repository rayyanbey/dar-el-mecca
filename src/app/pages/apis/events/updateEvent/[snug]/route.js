import { NextResponse } from "next/server";
import { updateEventAndDetails } from "../../../../controllers/event.controller";


export const PUT = async (req, {params}) => {

    const {snug} = await params;

    try {

        return await updateEventAndDetails(req,snug);
        
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        })
    }

}