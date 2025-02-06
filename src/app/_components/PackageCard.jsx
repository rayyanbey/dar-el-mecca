'use client';
import React from "react";
import DepartPlane from "../_icons/DepartPlane";
import ReturnPlane from "../_icons/ReturnPlane";
import BrownHotel from "../_icons/BrownHotel";
import Visa from "../_icons/Visa";
import BrownButton from "./BrownButton";
import { redirect } from "next/navigation";

function PackageCard({ data}) {
    const { title, duration, pricing, type, id, visa,images,eventDetails } = data;
    const {hotels,flights}=eventDetails;
    const lowestPrice = pricing 
        ? Math.min(...Object.values(pricing)) 
        : 0; 
    return (
        <div  className="flex flex-col gap-4 w-full  lg:w-[24rem] 2xl:w-[20vw]  rounded-t-full border-[1px] border-[#00000014] p-6 bg-transparent transition-colors duration-500 hover:bg-[#f6f2ed]">
            <img src={images[0]} className="w-full h-[70vh] lg:h-[50vh] object-cover  rounded-t-full" alt="" />
            <div className="flex justify-between">
                <h3 className="font-[700] cinzel-title text-[20px]">{title?.split(" ").slice(0, 2).join(" ")}</h3>
                <p className="font-[400] px-3 text-center bg-[#A8854E26] rounded-3xl text-[16px]"> {duration} Nights</p>
            </div>
            <div className="flex flex-col gap-2">
                    {
                        flights?.map((item, index) => {
                            return (
                                <div key={index} className="flex items-center gap-2">
                                    {item.type == 'Departure' ? <DepartPlane /> : <ReturnPlane />}
                                    <p className="font-[400] opacity-80  text-[16px]">Depart from {item.departureCity} - {item.destinationCity} : {DateSetter(item.date)}</p>
                                </div>
                            );
                        })
                    }
                    {hotels?.map((hotel) => (
                        <div key={hotel.id} className="flex items-center gap-2">
                            <BrownHotel />
                            <p className="font-[400] opacity-80  text-[16px]">{hotel.name}</p>
                        </div>
                    ))}
                    <div className="flex items-center gap-2">
                        <Visa />
                        <p className="font-[400] opacity-80 text-[16px]">
                            {visa == "Y" ? "Visa Included" :visa == "Fee" ? "Visa Fee Included":"Visa Not Included"}
                        </p>
                    </div>
                    <div className="w-full h-[1px] bg-[#00000014]"></div>
                </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <p className="font-[300] opacity-80  text-[14px]">Starts From</p>
                    <p className="font-[700] cinzel-title text-[#6F634E]  text-[23.3px]">${lowestPrice}</p>
                </div>
                <BrownButton text="Book Now" onClick={() => redirect(`/${type}-package/${id}`) } />
            </div>
        </div>
    );
}

export default PackageCard;
