import { createEvent } from "../../../controllers/event.controller"
import { NextResponse } from "next/server";
export const POST = async (request) => {
    try {
        return await createEvent(request);
        //return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Error while creating event",
            error: error.message
        })
    }
};