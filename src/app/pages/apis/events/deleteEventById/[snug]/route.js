import { deleteEvent } from "../../../../controllers/event.controller"

export const DELETE = async (req, {params}) => {
    return await deleteEvent(req, params.snug);
}