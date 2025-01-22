import { updateContactInformation } from "../../../controllers/company.controller";

export const PUT = async (req, res) => {
    try{
        return await updateContactInfo(req, res);
    }catch(error){
        return NextResponse.json({
            status: 500,
            message: "An error occured while updating contact info",
            error: error
        })
    }
}