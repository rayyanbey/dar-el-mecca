import { NextResponse } from "next/server";
import Event, { EventDetails, Flight, Hotel } from "../models/event.models";

//create event
const createEvent = async (req, res) => {
    //title month description type duration pricing visa eventDetails flightDetails tagline
    try {
        //getting files from multer
        const filePaths = req.files.map((file) => file.path)

        //uplaod these images on third party storage and get url from there and save in db
        const arrayOfUrls = new Array();

        //creating an event
        const event = new Event.create({
            title: req.body.title,
            month: req.body.month,
            description: req.body.description,
            type: req.body.type,
            duration: req.body.duration,
            pricing: req.body.pricing,
            visa: req.body.visa,
            eventDetails: req.body.eventDetails,
            flightDetails: req.body.flightDetails,
            tagline: req.body.tagline,
            images: arrayOfUrls
        })

        if (event) {
            res.status(201).json({ status: 201, message: "Event created", data: event });
        }
        else {
            res.status(500).json({ status: 400, message: "Internal server error" });
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
    createEvent
}