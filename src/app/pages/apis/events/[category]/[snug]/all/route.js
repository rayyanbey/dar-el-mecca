import { getAllEventsOfSpecificMonth } from "../../../../../controllers/event.controller";

export const GET = async (req,{params}) => {
    return await getAllEventsOfSpecificMonth(params.snug); 
};