import { deleteEvent } from "../../../../controllers/event.controller";

export const DELETE = async (req, { params }) => {
    // Ensure params exists and has the snug property
    const {snug} = await params
    try {
       const bool =  await deleteEvent(snug);

       if(bool){
        return new Response(JSON.stringify({
            status: 200,
            message: "Event deleted successfully"
        }), { status: 200 });
       }
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        }), { status: 500 });
    }
};