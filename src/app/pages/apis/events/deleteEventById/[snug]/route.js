import { deleteEvent } from "../../../../controllers/event.controller"

export const POST = async (req, {params}) => {
    return await deleteEvent(req,params.id)
}