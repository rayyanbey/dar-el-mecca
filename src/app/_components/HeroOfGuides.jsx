import React from "react";
import TransparentButton from "../_components/TransparentButton";

function HeroOfGuides({image, category, tagline, preTitle, middleTitle,miniDescription}) {
    return (
        <div className="relative w-full h-[165vh] lg:h-[90vh]">
            <img src={image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white bg-opacity-[88%]"></div>
            <div className="absolute inset-0 flex flex-col w-full items-center justify-center gap-6">
                <p
                    className={`text-[22px]  font-[400] text-center ${
                        category[0] == "T" ? "text-black":'text-secondary'
                    }`}
                >
                    {tagline}
                </p>
                <h2 className="w-full lg:w-[50%] text-[52px] font-[700] cinzel-title text-center leading-snug">
                    {preTitle}
                    <span className="text-secondary">{middleTitle}</span>
                    from USA {new Date().getFullYear()}
                </h2>
                <p className="w-[75%] text-[18px] font-[300] text-center">
                Dar El Mecca Travel offers a Premium {miniDescription} in 2025, providing exceptional services and seamless travel arrangements from all over the USA.</p>
                <div className="w-full flex justify-center">
                    <TransparentButton text="View Package Details" />
                </div>
            </div>
        </div>
    );
}

export default HeroOfGuides;
