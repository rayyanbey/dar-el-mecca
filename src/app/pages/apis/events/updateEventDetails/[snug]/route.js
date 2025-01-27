import { updateEventDetails } from "../../../../controllers/event.controller"
export const PUT = async (req, {params}) => {
    return await updateEventDetails(req,params.id)
}