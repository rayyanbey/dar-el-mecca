import Event from "../models/event.models";

//create event

//delete event

//update event

//get event titles
const getAllTitles = async (req, res) => {
    try {
        const events = await Event.find({
        }, { title: 1 });
        res.status(200).json({status:200,message:"Success",data:events});
    } catch (error) {
        res.status(500).json({status:500,message: error.message});
    }
}
export{
    getAllTitles
}