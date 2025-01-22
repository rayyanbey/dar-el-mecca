import { updateAddress } from "../../../controllers/company.controller";


export const PUT = async (req, res) => {
    try{
        return await updateAddress(req, res);
    }catch(error){
        return NextResponse.json({
            status: 500,
            message: "An error occured while updating address",
            error: error
        })
    }
}