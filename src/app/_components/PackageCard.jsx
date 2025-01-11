'use client';
import React from "react";
import DepartPlane from "../_icons/DepartPlane";
import ReturnPlane from "../_icons/ReturnPlane";
import BrownHotel from "../_icons/BrownHotel";
import Visa from "../_icons/Visa";
import BrownButton from "./BrownButton";
import { redirect } from "next/navigation";

function PackageCard({ title, duration, pricing,type }) {
    const lowestPrice = pricing 
        ? Math.min(...Object.values(pricing)) 
        : 0; 
    return (
        <div className="flex flex-col gap-4 w-full  lg:w-[24rem] rounded-t-full border-[1px] border-[#00000014] p-6 bg-transparent transition-colors duration-500 hover:bg-[#f6f2ed]">
            <img src="/images/umrah-service.jpeg" className="w-full h-[60%] object-cover  rounded-t-full" alt="" />
            <div className="flex justify-between">
                <h3 className="font-[700] cinzel-title text-[20px]">{title?.split(" ").slice(0, 2).join(" ")}</h3>
                <p className="font-[400] px-3 text-center bg-[#A8854E26] rounded-3xl text-[16px]"> {duration} Nights</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="w-full h-[1px] bg-[#00000014]"></div>
                <div className="flex items-center gap-2">
                    <DepartPlane />
                    <p className="font-[400] opacity-80  text-[16px]">Depart from IAD-MED: 20 FEB</p>
                </div>
                <div className="flex items-center gap-2">
                    <ReturnPlane />
                    <p className="font-[400] opacity-80  text-[16px]">Return from JED-IAD: 28 FEB</p>
                </div>
                <div className="flex items-center gap-2">
                    <DepartPlane />
                    <p className="font-[400] opacity-80  text-[16px]">Depart from JFK-MED: 20 FEB</p>
                </div>
                <div className="flex items-center gap-2">
                    <ReturnPlane />
                    <p className="font-[400] opacity-80  text-[16px]">Return from IAD-MED: 20 FEB</p>
                </div>
                <div className="flex items-center gap-2">
                    <BrownHotel />
                    <p className="font-[400] opacity-80  text-[16px]">5 Star Swissotel Makkah</p>
                </div>
                <div className="flex items-center gap-2">
                    <BrownHotel />
                    <p className="font-[400] opacity-80  text-[16px]">5 Star Anwar Al Medina Movenpick</p>
                </div>
                <div className="flex items-center gap-2">
                    <Visa />
                    <p className="font-[400] opacity-80  text-[16px]">Visa Included</p>
                </div>
                <div className="w-full h-[1px] bg-[#00000014]"></div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <p className="font-[300] opacity-80  text-[14px]">Starts From</p>
                    <p className="font-[700] cinzel-title text-[#6F634E]  text-[23.3px]">${lowestPrice}</p>
                </div>
                <BrownButton text="Book Now" onClick={() => redirect(`/${type}-package/${title?.split(" ").join("-")}`) } />
            </div>
        </div>
    );
}

export default PackageCard;
