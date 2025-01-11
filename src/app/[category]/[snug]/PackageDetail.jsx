"use client";
import React, {useEffect, useState} from "react";
import TransparentButton from "../../_components/TransparentButton";
import BrownButton from "../../_components/BrownButton";

function PackageDetail({eventDetails}) {
    const [active, setActive] = useState("Inclusions");
    const [buttons, setButtons] = useState([]);
    useEffect(()=>{
        const newButtons = [];
    
        if (eventDetails.inclusion && eventDetails.inclusion.length > 0) {
            newButtons.push("Inclusions");
        }
        if (eventDetails.exclusion && eventDetails.exclusion.length > 0) {
            newButtons.push("Exclusions");
        }
        if (eventDetails.transportation && eventDetails.transportation.length > 0) {
            newButtons.push("Transportation");
        }
        if (eventDetails.hotels) {
            newButtons.push("Hotels");
        }
        setButtons(newButtons);
    },[])
    
    const content = {
        Inclusions: [
            "04 Nights Accommodation in Medina",
            "04 Nights Accommodation in Makkah",
            "Buffet Breakfast Included",
            "Complete Luxury Ground Transportation",
            "Medina to Makkah Haramain Train",
            "Visit Holy Sites In Madina & Makkah (Mazarat)",
            "Roundtrip Airfare Included",
        ],
        Exclusions: [
            "Saudi Tourist Visa Fee Included",
            "Lead by Imam",
            "No Extra Activities",
            "Airport Lounge Access Excluded",
            "Tips Not Included",
        ],
        Hotel: ["5-Star Hotels", "Room Service Available", "Free Wi-Fi"],
        Transportation: ["Luxury Buses", "Airport Pick and Drop", "Local Guided Transport"],
    };

    return (
        <section className="flex flex-col justify-center items-center gap-10 py-14">
            <div className="flex flex-col gap-2 items-center p-2 lg:p-0">
                <h4 className="cinzel-title text-[32px] font-[700]">Package Details</h4>
                <p className="text-[18px] font-[300]">
                    Detailed package guide about all the things included in the package.
                </p>
            </div>
            <div className="flex flex-col w-[86%] rounded-lg bg-tertiary gap-8 p-2 lg:p-10">
                <div className="flex  gap-4 lg:flex-row mx-auto lg:space-x-10 flex-wrap ">
                    {buttons.map((item, index) => (
                        <React.Fragment key={item}>
                            {active === item ? (
                                <BrownButton onClick={() => setActive(item)} text={item} active />
                            ) : (
                                <TransparentButton onClick={() => setActive(item)} text={item} />
                            )}
                            {index < buttons.length - 1 ? (
                                <div className="w-[1px] h-[35px] hidden my-auto bg-[#00000014] lg:flex justify-center items-center"></div>
                            ) : null}
                        </React.Fragment>
                    ))}
                </div>

                <div className="bg-white rounded-lg p-10">
                    <ul
                        className={`grid ${
                            ["Inclusions", "Exclusions"].includes(active) ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
                        } `}
                    >
                        {content[active].map((item, index) => (
                            <li key={index} className=" list-disc text-[18px] font-[300]">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default PackageDetail;
