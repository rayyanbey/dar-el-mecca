import { updateFlightDetails } from "../../../controllers/event.controller";



export const PUT = async (req, res) => {
    try {
        return await updateFlightDetails(req, res);
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message
        })
    }
}