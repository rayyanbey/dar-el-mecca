import { NextResponse } from "next/server";
import { getAllTitles } from "../../../controllers/event.controller";

export const GET = async (req,res) => {
  return await getAllTitles(); 
};
