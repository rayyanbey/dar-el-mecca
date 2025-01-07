import Event from "../models/event.models";

//create event
const createEvent = async(req,res)=>{
   //title month description type duration pricing visa eventDetails flightDetails tagline
   try {
    //getting files from multer
     const filePaths = req.files.map((file)=>file.path)

    //uplaod these images on third party storage and get url from there and save in db
    const arrayOfUrls = new Array();

     //creating an event
     const event = new Event.create({
            title:req.body.title,
            month:req.body.month,
            description:req.body.description,
            type:req.body.type,
            duration:req.body.duration,
            pricing:req.body.pricing,
            visa:req.body.visa,
            eventDetails:req.body.eventDetails,
            flightDetails:req.body.flightDetails,
            tagline:req.body.tagline,
            images:arrayOfUrls
     })

     if(event){
        res.status(201).json({ status: 201, message: "Event created", data: event });
     }
     else{
        res.status(500).json({ status: 400, message: "Internal server error"});
     }
   } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
   }
}

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
    getAllTitles,
    createEvent
}