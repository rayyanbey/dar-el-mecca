import BusinessHours from "../models/businessHours.models";
import ContactInformation from "../models/contactInfo.models";
import Company from "../models/company.models";
import { NextResponse } from "next/server";

// `https://localhost:3000/api/company/getCompanyInformation`
// `https://localhost:3000/api/company/updateBusinessHours`
// `https://localhost:3000/api/company/updateContactInfo`
// `https://localhost:3000/api/company/updateAddress`

//getting business hours

const updateBusinessHours = async (req) => {

  try {
    const existingData = await BusinessHours.findOne();
    const { days } = await req.json();

    // Merge incoming changes with existing data
    const mergedData = { 
      ...existingData.dataValues,
      ...days 
    };

    const [affectedCount] = await BusinessHours.update(
      mergedData,
      { where: { id: existingData.id } }
    );

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
const updateContactInformation = async (req, res) => {
  try {
    const existingData = await ContactInformation.findOne();
    const {
      phoneNumbers = existingData.phoneNumbers,
      email = existingData.email,
      faxNumbers = existingData.faxNumbers,
    } = await req.json();

    await ContactInformation.update(
      {
        phoneNumbers,
        email,
        faxNumbers,
      },
      { where: { id: existingData.id } }
    );

    return new NextResponse(
      JSON.stringify({
        status: 200,
        message: "Contact info updated",
        data: { phoneNumbers, email, faxNumbers },
      })
    );
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "An error occured while updating contact information",
      error: error,
    });
  }
};


const updateAddress = async (req) => {
  try {
    const { address, documentAddress, whatsapp } = await req.json();

    const existingData = await Company.findOne();
    // Update first company entry (or add where clause for specific company)
   await Company.update(
      { address, documentAddress, whatsapp },
      { where: { id: existingData.id} } // Add proper where condition for your use case
    );

    // if (affectedCount === 0) {
    //   return new NextResponse(
    //     JSON.stringify({
    //       status: 404,
    //       message: "Company record not found",
    //       data:existingData
    //     }),
    //     { status: 404 }
    //   );
    // }

    return new NextResponse(
      JSON.stringify({
        status: 200,
        message: "Address updated successfully",
        data: { address, documentAddress, whatsapp },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Update error:", error);
    return new NextResponse(
      JSON.stringify({
        status: 500,
        message: "Internal server error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
const summarizeBusinessHours = (data) => {
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  let openDays = [];
  let closedDays = [];

  days.forEach(day => {
      if (data[day].open) {
          openDays.push({
              day,
              openingTime: data[day].openingTime,
              closingTime: data[day].closingTime
          });
      } else {
          closedDays.push(day);
      }
  });

  let summary = "";
  if (openDays.length > 0) {
      const firstDay = openDays[0].day.charAt(0).toUpperCase() + openDays[0].day.slice(1);
      const lastDay = openDays[openDays.length - 1].day.charAt(0).toUpperCase() + openDays[openDays.length - 1].day.slice(1);

      summary += `${firstDay}-${lastDay}:\n ${openDays[0].openingTime} - ${openDays[0].closingTime} EST\n`;
  }

  if (closedDays.length > 0) {
      summary += `${closedDays.map(day => day.charAt(0).toUpperCase() + day.slice(1)).join(", ")}: CLOSED`;
  }

  return summary;
};
const getBusinessHoursController = async () => {
  try {
    const businessHours = await BusinessHours.findOne();
    return NextResponse.json({
      status: "success",
      message: "All Events Successfully Fetched",
      data: summarizeBusinessHours(businessHours),
  });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: "An error occurred while fetching company information",
      error: error.message,
    });
  }
}

const getCompanyInformation = async () => {
  try {
    const contactInformation = await ContactInformation.findOne();
    const address = await Company.findOne();
    return NextResponse.json({
      status: "success",
      message: "All Events Successfully Fetched",
      data: {address,contactInformation},
  });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "An error occurred while fetching company information",
      error: error.message,
    });
  }
}


export {
  updateBusinessHours,
  updateContactInformation,
  updateAddress,
  getCompanyInformation,
  getBusinessHoursController
};
