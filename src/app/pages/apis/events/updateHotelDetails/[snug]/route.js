import { NextResponse } from "next/server";
import { updateHotelDetails } from "../../../../controllers/event.controller";

export const PUT = async (req, { params }) => {
    const success = await updateHotelDetails(req, snug);
};