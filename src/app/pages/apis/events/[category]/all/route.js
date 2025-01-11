import { getAllEvents } from "../../../../controllers/event.controller";

export const GET = async (req,{params}) => {
    return await getAllEvents(params.category[0]); 
};