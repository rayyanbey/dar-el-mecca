import { getSpecificEvent } from "../../../../controllers/event.controller";
export const GET = async (req,{params}) => {
    return await getSpecificEvent(params.snug); 
};