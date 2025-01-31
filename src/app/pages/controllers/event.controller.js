import { NextResponse } from "next/server";
import { Event, EventDetails, Flight, Hotel } from "../models/event.models";
import sequelize from "../config/dbConfig";
import Categories from "../../_enums/packagesCategories";
import { uploadToCloudinary } from "../utils/cloudinary";
import { Sequelize } from "sequelize";
import { title } from "process";


// http://localhost:3000/pages/apis/events/createEvent
// http://localhost:3000/pages/apis/events/deleteEventById
// http://localhost:3000/pages/apis/events/updateEvent
// http://localhost:3000/pages/apis/events/updateHotelDetails
// http://localhost:3000/pages/apis/events/updateFlightDetails
// http://localhost:3000/pages/apis/events/allEventsTitles
// http://localhost:3000/pages/apis/events/getHotels
// http://localhost:3000/pages/apis/events/getFlights
// http://localhost:3000/pages/apis/events/getDetails
// http://localhost:3000/pages/apis/events/allEventsTitles
//create event
const createEvent = async (request) => {
    try {
        const formData = await request.formData();

        // Extract basic fields
        const title = formData.get('title');
        const description = formData.get('description');
        const type = formData.get('type');
        const duration = parseInt(formData.get('duration'));
        const pricing = JSON.parse(formData.get('pricing'));
        const visa = formData.get('visa');
        const descriptionTitle = formData.get('descriptionTitle');
        const countryName = formData.get('countryName');
        const importantNote = formData.get('importantNote');
        const month = formData.get('month');
        const poster = formData.get('poster');



        // Parse JSON fields
        const eventDetails = JSON.parse(formData.get('eventDetails'));
        const hotelsData = JSON.parse(formData.get('hotels'));

        const flightDetails = JSON.parse(formData.get('flightDetails')).map(flight => ({
            ...flight,
            date: new Date(flight.date) // Convert string to Date object
        }));


        console.log(formData)

        

        // Validate required fields
        if (!title || !description || !type || !duration || !pricing || !visa || !descriptionTitle || !month) {
            return NextResponse.json({
                message: "All fields are required",
                status: 400
            });
        }
        // Handle event images (minimum 3)
        const eventImages = formData.getAll('images');
        console.log(eventImages)
        if (eventImages.length < 3) {
            return NextResponse.json(
                { message: "At least three event images required" },
                { status: 400 }
            );
        }
        const eventImageUrls = await Promise.all(eventImages.map(uploadToCloudinary));

        let posterUrl = " ";
        posterUrl = await uploadToCloudinary(poster);

        // Validate country for tour packages
        if (type === 'T' && !countryName) {
            return NextResponse.json(
                { message: "Country name is required for tour packages" },
                { status: 400 }
            );
        }

        // Process hotel images
        const processedHotels = await Promise.all(hotelsData.map(async (hotel, index) => {
            const hotelImages = formData.getAll(`hotelimages[${index}]`);
            if (hotelImages.length === 0) {
                throw new Error(`Hotel ${index + 1} has no images`);
            }
            const uploadedUrls = await Promise.all(hotelImages.map(uploadToCloudinary));
            return {
                ...hotel,
                images: uploadedUrls
            };
        }));
        

        // Create records in transaction
        const result = await sequelize.transaction(async (transaction) => {
            const event = await Event.create({
                title,
                images: eventImageUrls,
                description,
                type,
                duration,
                pricing,
                visa,
                descriptionTitle,
                countryName: type === 'T' ? countryName : null,
                poster: posterUrl,
                importantNote,
                month
            }, { transaction });

            const eventPackageDetail = await EventDetails.create({
                ...eventDetails,
                eventId: event.id
            }, { transaction });
            
             await Flight.bulkCreate(flightDetails.map(flight => ({
                    ...flight,
                    eventId: event.id
             })), { transaction });

            await Promise.all(processedHotels.map(hotel => 
                Hotel.create({
                    ...hotel,
                    eventDetailsId: eventPackageDetail.id
                }, { transaction })
            ));

            return event;
        });

        return NextResponse.json({
            message: "Event Created Successfully",
            data: result
        }, { status: 200 });

    } catch (error) {
        console.error("Error in createEvent:", error);
        return NextResponse.json({
            message: "An error occurred while creating event",
            error: error.message
        }, { status: 500 });
    }
};
//delete event
const deleteEvent = async (snug) => {
    console.log("snug", snug);

    const transaction = await sequelize.transaction();
    try {
        console.log("Entering to find event");
        const event = await Event.findByPk(snug, { transaction });

        if (!event) {
            await transaction.rollback();  // Rollback if event not found
            return NextResponse.json({
                status: 404,
                message: "Event Not Found",
                data: null
            });
        }

        console.log("Event Found, starting transaction");

        // First, delete dependent records in EventDetails
        await Hotel.destroy({
            where: {
                eventDetailsId: {
                    [Sequelize.Op.in]: sequelize.literal(`(SELECT id FROM "EventDetails" WHERE "eventId" = ${snug})`)
                }
            }
        }, { transaction });

        await EventDetails.destroy({ where: { eventId: snug } }, { transaction });
        await Flight.destroy({ where: { eventId: snug } }, { transaction });

        // Finally, delete the Event
        await Event.destroy({ where: { id: snug } }, { transaction });

        // Commit transaction
        await transaction.commit();

        console.log("Transaction completed successfully");
        return true;

    } catch (error) {
        await transaction.rollback();
        console.error("Transaction failed, rolled back", error);
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        });
    }
};
const updateEventAndDetails = async (req, snug) => {
    try {
        const formData = await req.formData();

        const eventUpdate = {
            title: formData.get('title'),
            description: formData.get('description'),
            type: formData.get('type'),
            duration: parseInt(formData.get('duration')),
            pricing: JSON.parse(formData.get('pricing')),
            visa: formData.get('visa'),
            descriptionTitle: formData.get('descriptionTitle'),
            importantNote: formData.get('importantNote'),
            month: formData.get('month'),
            countryName: formData.get('countryName'),
        };

        if (formData.get('type') !== 'T') {
            eventUpdate.countryName = null;
        }

        const eventDetails = JSON.parse(formData.get('eventDetails'));
        const posterFile = formData.get('poster');

        // Handle poster upload
        if (posterFile) {
            const posterUrl = await uploadToCloudinary(posterFile);
            eventUpdate.poster = posterUrl;
        }

        // Handle images upload
        const eventImages = formData.getAll('images');
        if (eventImages.length > 0) {
            const images = await Promise.all(eventImages.map(uploadToCloudinary));
            eventUpdate.images = images;
        }

        return await sequelize.transaction(async (transaction) => {
            // 1. Updating main event
            const event = await Event.findByPk(snug, { transaction });

            if (!event) {
                throw new Error(`Event with ID ${snug} not found`);
            }

            await event.update(eventUpdate, { transaction });

            // 2. Updating event details
            const event_details = await EventDetails.findOne({
                where: { eventId: snug },
                transaction
            });

            if (!event_details) {
                return NextResponse.json({
                    status: 404,
                    message: "Event Details Not Found"
                });
            }
            await event_details.update(eventDetails, { transaction });

            return NextResponse.json({
                status: 200,
                message: "Event and Details updated successfully"
            });
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: error.message
        });
    }
};
const updateHotelDetails = async (req, snug) => {
    try {

        const formData = await req.formData();

        console.log(formData)
        // Extract eventDetails from the request body
        const hotelDetails = {
            name: formData.get("name"),
            locationDescription: formData.get("locationDescription"),
            description: formData.get("description"),
            accomodationDescription: formData.get("accomodationDescription"),
            city: formData.get("city")
        }

        const hotelId = formData.get("hotelId");

        if (!hotelDetails) {
            return {
                status: 400,
                message: "Hotel Details are required.",
            };
        }

        // Start a transaction
        return await sequelize.transaction(async (transaction) => {
            // Find the existing EventDetails by eventId

            const eventDetails = await EventDetails.findOne({
                where: { eventId: snug },
                transaction,
            })

            const id = eventDetails.id;


            const existingHotelDetails = await Hotel.findOne({
                where: { eventDetailsid: id, id: hotelId },
                transaction,
            });

            if (!existingHotelDetails) {
                throw new Error(`Hotel Details for Event with ID ${id} not found.`);
            }

            const hotelImages = formData.getAll('images');
            if(hotelImages.length > 0){
                const images = await Promise.all(formData.getAll('images').map(uploadToCloudinary))
                hotelDetails.images = images
            }

            // Update the EventDetails
            await existingHotelDetails.update(hotelDetails, { transaction });

            return NextResponse.json({
                status: 200,
                message: "Hotel Details updated successfully.",
            });
        });        
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: error.message,
        });
    }

}
const updateFlightDetails = async (req, snug) => {
    try {
        const formData = await req.formData();
    
        console.log(formData)
        const flightDetails = JSON.parse(formData.get('flightDetails'))

        const flightId = formData.get('flightId')
        if (!flightDetails) {
            return NextResponse.json({
                status: 400,
                message: "Flight Details Missing",
                data: flightDetails
            })
        }
    
        return await sequelize.transaction(async (transaction) => {
            const flight = await Flight.findOne({
                where: {
                    eventId: snug,
                    id: flightId
                },
                transaction
            })

            console.log(flight)
    
            if (!flight) {
                return NextResponse.json({
                    status: 404,
                    message: "Flight Details Not Found",
                    data: flight
                })
            }
            
            await flight.update(flightDetails, { transaction });
            return NextResponse.json({
                status: 200,
                message: "Flight Details Updated Successfully"
            })
        })
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: error.message
        })
    }
}
//get event titles
const getAllTitles = async (req, res) => {
    try {
        const events = await Event.findAll({ attributes: ["id", "title", "type",'month'] });

        const groupedEvents = events.reduce((acc, event) => {
            const { id, title, type ,month} = event;
            if (!acc[type]) {
                acc[type] = { type, events: [] };
            }
            acc[type].events.push({ id, title,month });
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
const getSpecificEvent = async (snug) => {
    try {
        const result = await Event.findOne({
            where: {
                id:snug
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
        return NextResponse.json({
            status: "error",
            message: "Error fetching data",
            data: [],
        });
    }
};

const getAllEvents = async (category) => {
    try {
        const events = await Event.findAll({ where: { type: category } });
        if (category == 'U') {
            const categorizedEvents = events.reduce((acc, event) => {
                const month = event.month;
                if (!acc[month]) {
                    acc[month] = [];
                }
                acc[month].push(event);
                return acc;
            }, {});
            return NextResponse.json({
                status: "success",
                message: "All Events Successfully Fetched",
                data: categorizedEvents,
            })
        }
        const categ = (category[0] === Categories.HAJJ) ? "Hajj" : "Tour";
        const categorizedEvents = { [categ]: events };
        return NextResponse.json({
            status: "success",
            message: "All Events Successfully Fetched",
            data: categorizedEvents,
        });
    } catch (error) {
        return NextResponse.json({
            status: "error",
            message: "Error fetching data",
            data: [],
        });
    }
};
const getAllEventsOfSpecificMonth = async (month) => {
    try {
        const events = await Event.findAll({ where: { month: month } });
        const categorizedEvents = { [month]: events };
        return NextResponse.json({
            status: "success",
            message: "All Events Successfully Fetched",
            data: categorizedEvents,
        });
    } catch (error) {
        return NextResponse.json({
            status: "error",
            message: "Error fetching data",
            data: [],
        });
    }
};


const getAllHotels = async (req,snug) => {
    try {
        const event = await Event.findByPk(snug, {
            include: [
                {
                    model: EventDetails,
                    as: 'eventDetails',
                    include: [
                        {
                            model: Hotel,
                            as: 'hotels'
                        }
                    ]
                }
            ]
        });

        return NextResponse.json({
            status: 200,
            message: "Hotels Fetched Successfully",
            data: event.eventDetails.hotels
        })
    } catch (error) {
        return NextResponse.json({
            status: "error",
            message: "Error fetching data",
            data: [],
        });
    }
}

const getAllFlights = async (req,snug) => {
    try {
        const flights = await Flight.findAll({
            where: {
                eventId: snug
            }
        })

        return NextResponse.json({
            status: 200,
            message: "Flights Fetched Successfully",
            data: flights
        })
    } catch (error) {
        return NextResponse.json({
            status: "error",
            message: "Error fetching data",
            data: [],
        })
    }
}

const getAllDetails = async (req,snug) => {
    try {
        const event = await Event.findByPk(snug, {
            include: [
                {
                    model: EventDetails,
                    as: 'eventDetails'
                }
            ]
        });

        return NextResponse.json({
            status: 200,
            message: "Details Fetched Successfully",
            data: event
        })
    } catch (error) {
        return NextResponse.json({
            status: "error",
            message: "Error fetching data",
            data: [],
        });
    }
}
export {
    getSpecificEvent,
    getAllTitles,
    createEvent,
    deleteEvent,
    updateEventAndDetails,
    updateHotelDetails,
    updateFlightDetails,
    getAllEventsOfSpecificMonth,
    getAllEvents,
    getAllHotels,
    getAllFlights,
    getAllDetails
}