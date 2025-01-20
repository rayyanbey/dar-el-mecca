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

const updateBusinessHours = async (req, res) => {
    const days = req.body.days;
    const openingTime = req.body.openingTime;
    const closingTime = req.body.closingTime;

    try {
        await BusinessHours.update({
            days: days,
            openingTime: openingTime,
            closingTime: closingTime
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "An error occured while updating business hours",
            error: error
        })
    }
}

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