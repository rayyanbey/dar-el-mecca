import { updateBusinessHours } from "../../../controllers/company.controller";

export const PUT = async (req, res) => { 
    try{
        return await updateBusinessHours(req, res);
    }catch(error){
        return NextResponse.json({
            status: 500,
            message: "An error occured while updating business hours",
            error: error
        })
    }
}