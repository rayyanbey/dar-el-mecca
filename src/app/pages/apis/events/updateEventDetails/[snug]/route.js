import { updateEventDetails } from "../../../../controllers/event.controller"
export const PUT = async (req, {params}) => {
    try{
    const data =  await updateEventDetails(req,params.id)
    return NextResponse.json(data)
    }catch(error){
        return NextResponse.json({
            status: 500,
            message: error.message
        })
    }

}