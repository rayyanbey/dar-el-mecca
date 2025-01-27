import { NextResponse } from "next/server";
import { Event, EventDetails, Flight, Hotel } from "../models/event.models";
import sequelize from "../config/dbConfig";
import Categories from "../../_enums/packagesCategories";


// http://localhost:3000/pages/apis/events/createEvent
// http://localhost:3000/pages/apis/events/deleteEventById
// http://localhost:3000/pages/apis/events/updateEventDetails
// http://localhost:3000/pages/apis/events/updateHotelDetails
// http://localhost:3000/pages/apis/events/updateFlightDetails
// http://localhost:3000/pages/apis/events/updateEvent

//create event
const createEvent = async (req, res) => {
    try {
        const formData = await req.formData();

        // Extract basic fields
        const title = formData.get('title');
        const description = formData.get('description');
        const type = formData.get('type');
        const duration = parseInt(formData.get('duration'));
        const pricing = JSON.parse(formData.get('pricing'));
        const visa = formData.get('visa');
        const descriptionTitle = formData.get('bigDescriptionTitle');
        const countryName = formData.get('countryName');
        const importantNote = formData.get('importantNote');
        const month = formData.get('month');

        // Parse JSON fields
        const eventDetails = JSON.parse(formData.get('eventDetails'));
        const flightDetails = JSON.parse(formData.get('flightDetails'));
        const hotelsData = JSON.parse(formData.get('hotels'));

        // Validate required fields
        if (!title || !description || !type || !duration || !pricing || !visa || !descriptionTitle || !month) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        // Handle event images (minimum 3)
        const eventImages = formData.getAll('images');
        if (eventImages.length < 3) {
            return NextResponse.json(
                { message: "At least three event images required" },
                { status: 400 }
            );
        }
        const eventImageUrls = await Promise.all(eventImages.map(uploadToCloudinary));

        // Handle posters for Hajj events
        let posterUrls = [];
        if (type === 'H') {
            const posterFiles = formData.getAll('posters');
            if (posterFiles.length === 0) {
                return NextResponse.json(
                    { message: "Posters are required for Hajj events" },
                    { status: 400 }
                );
            }
            posterUrls = await Promise.all(posterFiles.map(uploadToCloudinary));
        }

        // Validate country for tour packages
        if (type === 'T' && !countryName) {
            return NextResponse.json(
                { message: "Country name is required for tour packages" },
                { status: 400 }
            );
        }

        // Process hotel images
        const processedHotels = await Promise.all(hotelsData.map(async (hotel, index) => {
            const hotelImages = formData.getAll(`hotelImages[${index}]`);
            if (hotelImages.length === 0) {
                throw new Error(`Hotel ${index + 1} has no images`);
            }
            const uploadedUrls = await Promise.all(hotelImages.map(uploadToCloudinary));
            return {
                ...hotel,
                images: uploadedUrls
            };
        }));

        // Validate flight dates
        const departureDate = new Date(flightDetails.departureDate);
        const returnDate = new Date(flightDetails.returnDate);
        if (returnDate <= departureDate) {
            return NextResponse.json(
                { message: "Return date must be after departure date" },
                { status: 400 }
            );
        }

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
                posters: type === 'H' ? posterUrls : null,
                importantNote,
                month
            }, { transaction });

            const eventPackageDetail = await EventDetails.create({
                ...eventDetails,
                eventId: event.id
            }, { transaction });

            await Flight.create({
                ...flightDetails,
                departureDate,
                returnDate,
                eventId: event.id
            }, { transaction });

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
        return NextResponse.json({
            message: "An error occurred while creating event",
            error: error.message
        }, { status: 500 });
    }
};
//delete event
const deleteEvent = async (req, id) => {
    try {
        const event = await Event.findByPk(id);
        if (!event) {
            return NextResponse.json({
                status: 404,
                message: "Event Not Found",
                data: event
            })
        }
        //begin transaction 

        await sequelize.transaction(async (transaction) => {
            await Hotel.destroy({
                where: {
                    eventDetailsId: {
                        [sequelize.Op.in]: sequelize.literal(`(SELECT id FROM "EventDetails" WHERE "eventId" = ${id})`)
                    }
                },
                transaction,
            })

            await EventDetails.destroy({
                where: {
                    eventId: id
                },
                transaction
            })

            await Flight.destroy({
                where: {
                    eventId: id
                },
                transaction
            })

            await Event.destroy({
                where: {
                    id: id
                },
                transaction
            })

            return NextResponse.json({
                status: 200,
                message: "Event Deleted Successfully",
                data: null
            })
        })
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
            data: null
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

        return NextResponse.json({
            status: 200,
            message: "Event is updated successfully.",
            data: result,
        });
    } catch (error) {
        return NextResponse.json({ 
            
            status: 400,
            message: error.message,
        });
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

        return NextResponse.json({
            status: 200,
            message: "EventDetails updated successfully.",
            data: result,
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: error.message,
        });
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

        return NextResponse.json({
            status: 200,
            message: "Hotel Details updated successfully.",
            data: result,
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: error.message,
        });
    }

}

const updateFlightDetails = async (req, id) => {
    const { flightDetails } = req.body;

    if (!flightDetails) {
        return NextResponse.json({
            status: 400,
            message: "Flight Details Missing",
            data: flightDetails
        })
    }

    const result = await sequelize.transaction(async (transaction) => {
        const flight = await Flight.findOne({
            where: {
                eventId: id
            },
            transaction
        })

        if (!flight) {
            return NextResponse.json({
                status: 404,
                message: "Flight Details Not Found",
                data: flight
            })
        }

        await flight.update(flightDetails, { transaction })

        return flight
    })

    return NextResponse.json({
        status: 200,
        message: "Flight Details Updated Successfully",
        data: result
    })
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
export {
    getSpecificEvent,
    getAllTitles,
    createEvent,
    deleteEvent,
    updateEvent,
    updateEventDetails,
    updateHotelDetails,
    updateFlightDetails,
    getAllEventsOfSpecificMonth,
    getAllEvents
}