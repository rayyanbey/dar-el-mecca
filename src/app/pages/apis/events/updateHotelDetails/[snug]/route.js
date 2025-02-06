import { NextResponse } from "next/server";
import { updateHotelDetails } from "../../../../controllers/event.controller";

export const PUT = async (req, { params }) => {
  const { snug } = params;
  try {
    const success = await updateHotelDetails(req, snug);
    if (success) {
      return NextResponse.json(
        { message: "Hotel details updated successfully" },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { message: "Failed to update hotel details" },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
};