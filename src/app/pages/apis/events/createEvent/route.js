import { createEvent } from "../../../controllers/event.controller"
import { upload } from "../../../middlewares/multer.middleware";
export const POST = async (req, res) => {
    upload.single('file')(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return await createEvent(req, res);
    });
};