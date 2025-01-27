import { NextResponse } from "next/server";
import { updateEvent } from "../../../controllers/event.controller";

export const PUT = async (req, res) => {
    try {
        const result = await updateEvent(req, res);
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message
        }, { status: 500 });
    }
};