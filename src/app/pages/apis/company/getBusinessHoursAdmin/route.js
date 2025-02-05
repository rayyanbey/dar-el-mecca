import { NextResponse } from "next/server"
import { getBusinessHours } from "../../../controllers/company.controller"


export const GET = async(request)=>{
  try {
    return await getBusinessHours(request)
  } catch (error) {
    return NextResponse.json({
        status: 'error',
        message: "An error occurred while fetching company information",
        error: error.message,
    })
  }
}