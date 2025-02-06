"use client";
import React, { useEffect, useState } from "react";
import TransparentButton from "../../_components/TransparentButton";
import BrownButton from "../../_components/BrownButton";

function PackageDetail({ eventDetails }) {
    const [active, setActive] = useState("Inclusions");
    const [buttons, setButtons] = useState([]);
    console.log(eventDetails)
    useEffect(() => {
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
    }, [eventDetails]);

    const content = {
        Inclusions: eventDetails.inclusion,
        Exclusions: eventDetails.exclusion,
        hotels: eventDetails.hotels
            ? eventDetails.hotels.map((hotel) => ({
                id: hotel.id,
                name: hotel.name,
                city: hotel.city,
                accomodationDescription: hotel.accomodationDescription,
                description: hotel.description,
                locationDescription: hotel.locationDescription,
                images: hotel.images || [],
            }))
            : [],
        Transportation: eventDetails.transportation,
    };

    return (
        <section className="flex flex-col justify-center items-center gap-10 py-14">
            <div className="flex flex-col gap-2 items-center p-2 lg:p-0">
                <h4 className="cinzel-title text-[32px] font-[700]">Package Details</h4>
                <p className="text-[18px] font-[300]">
                    Detailed package guide about all the things included in the package.
                </p>
            </div>
            <div className="flex flex-col w-[86%] rounded-lg bg-tertiary gap-8 p-4 lg:p-10">
                <div className="flex gap-4 lg:flex-row mx-auto lg:space-x-10 flex-wrap">
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

                {/* Inclusions & Exclusions */}
                {(active === "Inclusions" || active === "Exclusions") && (
                    <div className="bg-white rounded-lg p-10">
                        <ul className="grid grid-cols-1 lg:grid-cols-2">
                            {content[active].map((item, index) => (
                                <li key={index} className="list-disc text-[18px] font-[300]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Hotels */}
                {active === "Hotels" && (
                    <div className="bg-white rounded-lg p-4 lg:p-10 h-fit flex flex-col gap-2">
                        {content.hotels.length > 0 ? (
                            content.hotels.map((hotel) => (
                                <div key={hotel.id} className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                    <div className="flex flex-col gap-4">
                                        <h5 className="text-[20px] font-[600]">{hotel.city} Hotel : {hotel.name}</h5>
                                        <p className="text-[18px] font-[300]">{hotel.description}</p>
                                        <p className="text-[18px] font-[300]">
                                            <span className="text-[20px] font-[600]">Location : </span>
                                            {hotel.locationDescription}
                                        </p>
                                        <p className="text-[18px] font-[300]">
                                            <span className="text-[20px] font-[600]">Accomodation : </span>
                                            {hotel.accomodationDescription}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 h-full gap-2">
                                        {hotel.images.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt={`Hotel ${hotel.name} ${i + 1}`}
                                                className=" rounded-lg h-full  object-cover w-[100%]"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-[18px] font-[300]">No hotel information available.</p>
                        )}
                    </div>
                )}

                {/* Transportation */}
                {active === "Transportation" && (
                    <div className="bg-white rounded-lg p-4 lg:p-10 h-fit flex flex-col gap-2">
                        {content.Transportation.map((item, index) => (
                            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                <p className="text-[18px] font-[300]">{item}</p>
                                <div className="grid grid-cols-2 h-full gap-2">
                                    <img src="https://res.cloudinary.com/duuallxxr/image/upload/v1738739207/reviews/alpnj3zsl32vbm1kbg39.jpg" className=" rounded-lg  object-cover w-[100%]" alt="" />
                                    <img src="https://res.cloudinary.com/duuallxxr/image/upload/v1738739207/reviews/alpnj3zsl32vbm1kbg39.jpg" className=" rounded-lg  object-cover w-[100%]" alt="" />
                                    <img src="https://res.cloudinary.com/duuallxxr/image/upload/v1738739207/reviews/alpnj3zsl32vbm1kbg39.jpg" className=" rounded-lg  object-cover w-[100%]" alt="" />
                                    <img src="https://res.cloudinary.com/duuallxxr/image/upload/v1738739207/reviews/alpnj3zsl32vbm1kbg39.jpg" className=" rounded-lg  object-cover w-[100%]" alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default PackageDetail;
