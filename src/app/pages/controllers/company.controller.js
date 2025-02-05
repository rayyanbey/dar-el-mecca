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
      whatsapp = existingData.whatsapp,
    } = await req.json();

    await ContactInformation.update(
      {
        phoneNumbers,
        email,
        faxNumbers,
        whatsapp
      },
      { where: { id: existingData.id } }
    );

    return new NextResponse(
      JSON.stringify({
        status: 200,
        message: "Contact info updated",
        data: { phoneNumbers, email, faxNumbers,whatsapp },
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
    const { address, documentAddress} = await req.json();

    const existingData = await Company.findOne();
    // Update first company entry (or add where clause for specific company)
   await Company.update(
      { address, documentAddress},
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
// const summarizeBusinessHours = (data) => {
//   const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
//   let openDays = [];
//   let closedDays = [];

//   days.forEach(day => {
//       if (data[day].open) {
//           openDays.push({
//               day,
//               openingTime: data[day].openingTime,
//               closingTime: data[day].closingTime
//           });
//       } else {
//           closedDays.push(day);
//       }
//   });

//   let summary = "";
//   if (openDays.length > 0) {
//       const firstDay = openDays[0].day.charAt(0).toUpperCase() + openDays[0].day.slice(1);
//       const lastDay = openDays[openDays.length - 1].day.charAt(0).toUpperCase() + openDays[openDays.length - 1].day.slice(1);

//       summary += `${firstDay}-${lastDay}:\n ${openDays[0].openingTime} - ${openDays[0].closingTime} EST\n`;
//   }

//   if (closedDays.length > 0) {
//       summary += `${closedDays.map(day => day.charAt(0).toUpperCase() + day.slice(1)).join(", ")}: CLOSED`;
//   }

//   return summary;
// };
// const getBusinessHoursController = async () => {
//   try {
//     const businessHours = await BusinessHours.findOne();
//     return NextResponse.json({
//       status: "success",
//       message: "All Events Successfully Fetched",
//       data: summarizeBusinessHours(businessHours),
//   });
//   } catch (error) {
//     return NextResponse.json({
//       status: 'error',
//       message: "An error occurred while fetching company information",
//       error: error.message,
//     });
//   }
// }

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

const getBusinessHours = async(req)=>{
  try {
    const businessHours = await BusinessHours.findOne();
    return NextResponse.json({
      status: "success",
      message: "All Hours Successfully Fetched",
      data: businessHours,
  });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: "An error occurred while fetching Business information",
      error: error.message,
    });
  }
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const getBusinessHoursSummary = async (req) => {
  try {
    const businessHours = await BusinessHours.findOne();
    if (!businessHours) {
      return NextResponse.json({
        status: "error",
        message: "Business hours not found",
      });
    }

    // Convert the Sequelize instance to a plain JS object.
    const rawData = businessHours.toJSON();

    // Define the list of days in order
    const days = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];

    // Create a summary for each day (e.g., "9:00 AM - 5:00 PM" or "Closed")
    const dailySummary = days.reduce((acc, day) => {
      const dayData = rawData[day];
      let schedule;
      if (!dayData || !dayData.open) {
        schedule = "Closed";
      } else {
        schedule = `${dayData.openingTime} - ${dayData.closingTime}`;
      }
      acc[day] = schedule;
      return acc;
    }, {});

    // Group days by the schedule string
    const groupedSchedules = days.reduce((acc, day) => {
      const schedule = dailySummary[day];
      if (!acc[schedule]) {
        acc[schedule] = [];
      }
      // Save the day with the first letter capitalized
      acc[schedule].push(capitalize(day));
      return acc;
    }, {});

    // Format the grouped output into an array of objects for easy consumption
    // Example format: [{ days: "Monday, Tuesday, Wednesday", schedule: "09:00 AM - 05:00 PM" }, ...]
    const formattedGroups = Object.entries(groupedSchedules).map(
      ([schedule, daysArr]) => ({
        days: daysArr.join(", "),
        schedule,
      })
    );

    return NextResponse.json({
      status: "success",
      message: "Business Hours Grouped Summary Fetched Successfully",
      data: formattedGroups,
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "An error occurred while fetching the grouped business hours summary",
      error: error.message,
    });
  }
};

export {
  updateBusinessHours,
  updateContactInformation,
  updateAddress,
  getCompanyInformation,
  getBusinessHours,
  getBusinessHoursSummary
};
