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

const getBusinessHoursController = async () => {
  try {
    const businessHours = await BusinessHours.findOne();;
    return NextResponse.json({
      status: "success",
      message: "All Events Successfully Fetched",
      data: businessHours,
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
