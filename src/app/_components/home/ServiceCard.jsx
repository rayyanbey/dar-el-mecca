"use client";
import React from "react";
import TransparentButton from "../TransparentButton";
import Image from "next/image";

function ServiceCard({ title, description, image }) {
    return (
        <div className="flex flex-col  w-[18rem] lg:w-[23rem]  rounded-2xl bg-[#F9F9F9] border border-[#00000014]">
            <div className="relative h-[22rem]">
                <Image
                    className="rounded-t-2xl object-cover"
                    src={image}
                    alt="Umrah Service"
                    layout="fill"
                    priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-40 flex items-end justify-center">
                    <h3 className="text-white font-[300] text-[24px] mb-2">{title}</h3>
                </div>
            </div>
            <div className="p-4 flex flex-col justify-between">
                <p className="text-[16px] font-light opacity-80 leading-tight ">
                    {description}
                </p>
                <div className="w-full flex justify-center mt-4">
                    <TransparentButton text="View Details" onClick={() => {}} />
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
