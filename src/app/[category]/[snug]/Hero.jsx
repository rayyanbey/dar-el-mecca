import React from "react";
import ScrollButton from "../../_components/ScrollButton";

function Hero({ image, category, tagline, preTitle, middleTitle, miniDescription, scrollId }) {
    return (
        <div className="relative w-full h-[165vh] lg:h-[90vh]">
            <img src={image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white bg-opacity-[88%]"></div>
            <div className="absolute inset-0 flex flex-col w-full items-center justify-center gap-6">
                <p
                    className={`text-[22px]  font-[400] text-center ${category[0] == "T" ? "text-black" : 'text-secondary'
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
                    <ScrollButton text="View Package Details" id={scrollId} />
                </div>
            </div>
        </div>
    );
}

export default Hero;
