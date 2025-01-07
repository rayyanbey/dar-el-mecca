import connectDB from "../config/dbConfig";
import { getAllTitles,createEvent } from "../controllers/event.controller";
import { upload } from "../middlewares/multer.middleware";

export default async function handler(req,res){

    await connectDB();
    if(req.method === 'GET'){
        getAllTitles(req,res);
    }
    else if(req.method === 'POST'){
        upload.array("images", 15)(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ status: 400, message: err.message });
            }
            await createEvent(req, res); // Call the controller
        });
    }
    else{
        res.status(405).json({ status: 405, message: "Method not allowed" });
    }
}