import { deleteEvent } from "../../../../controllers/event.controller";

export const DELETE = async (req, { params }) => {
    if (!params || !params.snug) {
        return new Response(JSON.stringify({
            status: 400,
            message: "Bad Request: Missing snug parameter"
        }), { status: 400 });
    }

    const { snug } = params;  

    console.log(snug)
    return await deleteEvent(snug);
};
