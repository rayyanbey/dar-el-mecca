import BusinessHours from "../models/businessHours.models";
import ContactInformation from "../models/contactInfo.models";
import Company from "../models/company.models";
import { NextResponse } from "next/server";



// `https://localhost:3000/api/company/getBusinessHours`
// `https://localhost:3000/api/company/getContactInfo`
// `https://localhost:3000/api/company/getAddress`
// `https://localhost:3000/api/company/updateBusinessHours`
// `https://localhost:3000/api/company/updateContactInfo`
// `https://localhost:3000/api/company/updateAddress`


//getting business hours 

const getBusinessHours = async (req, res) => {
   try {
    const result = await BusinessHours.findAll();

    return NextResponse.json({
        status: 200,
        message: "Business hours fetched successfully",
        data: result
    })
   } catch (error) {
     return NextResponse.json({
         status: 500,
         message: "An error occured while fetching business hours",
         error: error
     })
   }
}

const updateBusinessHours = async (req) => {
    const { days } = await req.json(); // Expecting a JSON body with one or multiple days

    try {
        // Ensure that the 'days' field exists and is an object
        if (!days || typeof days !== 'object' || Object.keys(days).length === 0) {
            return NextResponse.json({
                status: 400,
                message: "Invalid input. Please provide valid business hours data.",
            });
        }

        // Prepare the update object for Sequelize
        let updateData = {};
        for (const day in days) {
            if (days.hasOwnProperty(day)) {
                updateData[day] = {
                    open: days[day].open ?? false, // Default to false if not provided
                    openingTime: days[day].openingTime || null,
                    closingTime: days[day].closingTime || null,
                };
            }
        }

        // Perform update on the first row (you might need to change 'where' condition for specific row updates)
        const updatedRows = await BusinessHours.update(
            updateData,
            {
                where: {}, // Update condition, e.g., { id: someId } if required
            }
        );

        if (updatedRows[0] === 0) {
            return NextResponse.json({
                status: 404,
                message: "No records updated. Business hours not found.",
            });
        }

        return NextResponse.json({
            status: 200,
            message: "Business hours updated successfully.",
        });

    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "An error occurred while updating business hours",
            error: error.message,
        });
    }
};
//getting contact information
const getContactInformation = async (req, res) => {
    try {
        const result = await ContactInformation.findAll();
    
        return NextResponse.json({
            status: 200,
            message: "Contact Information fetched successfully",
            data: result
        })
       } catch (error) {
         return NextResponse.json({
             status: 500,
             message: "An error occured while fetching contact information",
             error: error
         })
       }
}

const updateContactInformation = async (req, res) => {
    const phoneNumbers = req.body.phoneNumbers;
    const email = req.body.email;
    const faxNumbers = req.body.faxNumbers;

    try {
        await ContactInformation.update({
            phoneNumbers: phoneNumbers,
            email: email,
            faxNumbers: faxNumbers
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "An error occured while updating contact information",
            error: error
        })
    }
}

//getting address whatsapp and document address
const getAddress = async (req, res) => {
    try {
        const result = await Company.findAll();
    
        return NextResponse.json({
            status: 200,
            message: "Address fetched successfully",
            data: result
        })
       } catch (error) {
         return NextResponse.json({
             status: 500,
             message: "An error occured while fetching address",
             error: error
         })
       }
}

const updateAddress = async (req, res) => {
    const address = req.body.address;
    const documentAddress = req.body.documentAddress;
    const whatsapp = req.body.whatsapp;

    try {
        await Company.update({
            address: address,
            documentAddress: documentAddress,
            whatsapp: whatsapp
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "An error occured while updating address",
            error: error
        })
    }
}

export {
    getBusinessHours,
    getContactInformation,
    getAddress,
    updateBusinessHours,
    updateContactInformation,
    updateAddress
}