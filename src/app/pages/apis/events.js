import connectDB from "../config/dbConfig";
import { getAllTitles } from "../controllers/event.controller";

export default async function handler(req,res){

    await connectDB();
    if(req.method === 'GET'){
        getAllTitles();
    }
}