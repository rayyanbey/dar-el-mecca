import { createEvent } from "../../../controllers/event.controller"
import { NextResponse } from "next/server";
export const POST = async (req, res) => {
    try {
        const response = await createEvent(req);
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Error while creating event",
            error: error.message
        })
    }
};