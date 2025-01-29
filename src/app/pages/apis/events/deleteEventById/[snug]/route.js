import { deleteEvent } from "../../../../controllers/event.controller";

export const DELETE = async (req, { params }) => {
    // Ensure params exists and has the snug property
    const {snug} = await params
    if (!snug) {
        return new Response(JSON.stringify({
            status: 400,
            message: "Bad Request: Missing snug parameter"
        }), { status: 400 });
    }

    try {
        const result = await deleteEvent(snug);
        return new Response(JSON.stringify(result), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        }), { status: 500 });
    }
};