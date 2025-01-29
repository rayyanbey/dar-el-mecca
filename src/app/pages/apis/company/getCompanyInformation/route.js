import { NextResponse } from "next/server"
import { getCompanyInformation } from "../../../controllers/company.controller"



export const GET = async(request)=>{
    try {
        const result = await getCompanyInformation(request)

        return NextResponse.json({
            result
        })
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "An error occurred while fetching company information",
            error: error.message
        })
    }
}