import BusinessHours from "../models/businessHours.models";
import ContactInformation from "../models/contactInfo.models";
import Company from "../models/company.models";
import { NextResponse } from "next/server";


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


export {
    getBusinessHours,
    getContactInformation,
    getAddress
}