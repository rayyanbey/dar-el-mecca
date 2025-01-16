import { NextResponse } from "next/server";
import {Event, EventDetails, Flight, Hotel } from "../models/event.models";
import sequelize from "../config/dbConfig";

//create event
const createEvent = async (req, res) => {

    //files from multer
    const filePaths = req.files.map((file)=>file.path)
    //uplaod to third party
    const arrayOfUrls = new Array();
    //------

    const eventDetails = req.body.eventDetails? JSON.parse(eventDetails):null;
    const flightDetails = req.body.flightDetails? JSON.parse(flightDetails):null;
    const hotels = req.body.hotels? JSON.parse(hotels):null;

    if(!eventDetails){
        return NextResponse.json({
            status:400,
            message:"Event Details Missing",
            data:eventDetails
        })
    }
    if(!flightDetails){
        return NextResponse.json({
            status:400,
            message:"Flight Details Missing",
            data:flightDetails
        })
    }
    if(!hotels){
        return NextResponse.json({
            status:400,
            message:"Hotel Details Missing",
            data:hotels
        })
    }

    const result = await sequelize.transaction(async (transaction)=>{
        const event = await Event.create({
            title: req.body.title,
            images: arrayOfUrls,
            description: req.body.description,
            type: req.body.type,
            duration:req.body.duration,
            pricing:req.body.pricing,
            visa:req.body.visa,
            descriptionTitle:req.body.bigDescriptionTitle
        },{transaction})

        const eventPackageDetail = await EventDetails.create({
            ...eventDetails,
            eventId:event.id
        },{transaction})

        const flight = await Flight.create({
            ...flightDetails,
            eventId:event.id

        },{transaction})

        const hotel = await Hotel.create({
            ...hotels,
            eventDetailsId:eventPackageDetail.id

        },{transaction})
    })

    return NextResponse.json({
        status:200,
        message:"Event Created Successfully",
        data:result
    })
    
}
//delete event
const deleteEvent = async (req, id) => {
  try {
    const event = await Event.findByPk(id);
    if(!event){
        return NextResponse.json({
            status:404,
            message:"Event Not Found",
            data:event
        })
    }
    //begin transaction 

    await sequelize.transaction(async(transaction)=>{
        await Hotel.destroy({
            where:{
                eventDetailsId:{
                    [sequelize.Op.in]:sequelize.literal(`(SELECT id FROM "EventDetails" WHERE "eventId" = ${id})`)
                }
            },
            transaction,
        })

        await EventDetails.destroy({
            where:{
                eventId:id
            },
            transaction
        })

        await Flight.destroy({
            where:{
                eventId:id
            },
            transaction
        })

        await Event.destroy({
            where:{
                id:id
            },
            transaction
        })

        return NextResponse.json({
            status:200,
            message:"Event Deleted Successfully",
            data:null
        })
    })
  } catch (error) {
    return NextResponse.json({
        status:500,
        message:"Internal Server Error",
        data:null
    })
  }
}
const updateEvent = async (req, id) => {
    try {
        // Extract event from the request body
        const { event } = req.body;

        if (!event) {
            return {
                status: 400,
                message: "Event is required.",
            };
        }

        // Start a transaction
        const result = await sequelize.transaction(async (transaction) => {
            // Find the existing Event by eventId
            const existingEvent = await Event.findOne({
                where: { eventId: id },
                transaction,
            });

            if (!existingEvent) {
                throw new Error(`Event for Event with ID ${id} not found.`);
            }

            // Update the Event
            await existingEvent.update(event, { transaction });

            return existingEvent;
        });

        return {
            status: 200,
            message: "Event is updated successfully.",
            data: result,
        };
    } catch (error) {
        return {
            status: 400,
            message: error.message,
        };
    }
}
const updateEventDetails = async (req, id) => {
    try {
        // Extract eventDetails from the request body
        const { eventDetails } = req.body;

        if (!eventDetails) {
            return {
                status: 400,
                message: "EventDetails are required.",
            };
        }

        // Start a transaction
        const result = await sequelize.transaction(async (transaction) => {
            // Find the existing EventDetails by eventId
            const existingEventDetails = await EventDetails.findOne({
                where: { eventId: id },
                transaction,
            });

            if (!existingEventDetails) {
                throw new Error(`EventDetails for Event with ID ${id} not found.`);
            }

            // Update the EventDetails
            await existingEventDetails.update(eventDetails, { transaction });

            return existingEventDetails;
        });

        return {
            status: 200,
            message: "EventDetails updated successfully.",
            data: result,
        };
    } catch (error) {
        return {
            status: 400,
            message: error.message,
        };
    }
};

const updateHotelDetails = async (req, id) => {
    try {
        // Extract eventDetails from the request body
        const { hotelDetails } = req.body;

        if (!hotelDetails) {
            return {
                status: 400,
                message: "Hotel Details are required.",
            };
        }

        // Start a transaction
        const result = await sequelize.transaction(async (transaction) => {
            // Find the existing EventDetails by eventId
            const existingHotelDetails = await Hotel.findOne({
                where: { eventDetailsid: id },
                transaction,
            });

            if (!existingHotelDetails) {
                throw new Error(`Hotel Details for Event with ID ${id} not found.`);
            }

            // Update the EventDetails
            await existingHotelDetails.update(hotelDetails, { transaction });

            return existingHotelDetails;
        });

        return {
            status: 200,
            message: "Hotel Details updated successfully.",
            data: result,
        };
    } catch (error) {
        return {
            status: 400,
            message: error.message,
        };
    }

}

const updateFlightDetails = async (req, id) => {
    const {flightDetails} = req.body;

    if(!flightDetails){
        return NextResponse.json({
            status:400,
            message:"Flight Details Missing",
            data:flightDetails
        })
    }

    const result = await sequelize.transaction(async (transaction)=>{
        const flight = await Flight.findOne({
            where:{
                eventId:id
            },
            transaction
        })

        if(!flight){
            return NextResponse.json({
                status:404,
                message:"Flight Details Not Found",
                data:flight
            })
        }

        await flight.update(flightDetails,{transaction})

        return flight
    })

    return NextResponse.json({
        status:200,
        message:"Flight Details Updated Successfully",
        data:result
    })
}

//get event titles
const getAllTitles = async (req, res) => {
    try {
        const events = await Event.findAll({ attributes: ["id", "title", "type"] });

        const groupedEvents = events.reduce((acc, event) => {
            const { id, title, type } = event;
            if (!acc[type]) {
                acc[type] = { type, events: [] };
            }
            acc[type].events.push({ id, title });
            return acc;
        }, {});

        const result = Object.values(groupedEvents);

        return NextResponse.json({
            status: "success",
            message: "All Events Successfully Fetched",
            data: result,
        });
    } catch (error) {
        return NextResponse.json({ status: "error", message: error, data: [] })
    }
}

const getSpecificEvent = async (category, snug) => {
    const filteredCategory = category[0];
    const filteredSnug = snug.split("-").join(" ");

    try {
        console.log(category, snug);

        // Fetch data with Sequelize join
        const result = await Event.findOne({
            where: {
                type: filteredCategory,
                title: filteredSnug,
            },
            include: [
                {
                    model: EventDetails,
                    as: "eventDetails", // Correct alias
                    include: [
                        {
                            model: Hotel,
                            as: "hotels", // Correct alias
                        },
                    ],
                },
                {
                    model: Flight,
                    as: "flightDetails", // Correct alias
                },
            ],
        });        

        if (!result) {
            return NextResponse.json({
                status: "error",
                message: "Event not found",
                data: [],
            });
        }

        return NextResponse.json({
            status: "success",
            message: "All Events Successfully Fetched",
            data: result,
        });
    } catch (error) {
        console.error("Error fetching event data:", error);

        return NextResponse.json({
            status: "error",
            message: "Error fetching data",
            data: [],
        });
    }
};
export const getAllEvents = async (category) => {
    try {
        const events = await Event.findAll({where: {type: category}});
        return NextResponse.json({
            status: "success",
            message: "All Events Successfully Fetched",
            data: events,
        });
    } catch (error) {
        return NextResponse.json({
            status: "error",
            message: "Error fetching data",
            data: [],
        });
    }
};




export {
    getSpecificEvent,
    getAllTitles,
    createEvent,
    deleteEvent,
    updateEvent,
    updateEventDetails,
    updateHotelDetails,
    updateFlightDetails,
}