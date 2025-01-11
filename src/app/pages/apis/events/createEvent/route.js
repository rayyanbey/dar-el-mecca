import { createEvent } from "../../../controllers/event.controller"

export const POST = async (req, res) => {
    return await createEvent(req,res);
}