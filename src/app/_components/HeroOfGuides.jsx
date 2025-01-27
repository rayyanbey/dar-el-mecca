import React from "react";
import TransparentButton from "../_components/TransparentButton";

function HeroOfGuides({ image, preTitle, middleTitle, postTitle, miniDescription }) {
    return (
        <div className="relative w-full h-[105vh] lg:h-[90vh]">
            <img src={image} alt="" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-[#f4e4ca] opacity-40"></div>
            <div className="absolute inset-0 flex flex-col w-full items-center justify-center gap-6">
                <p
                    className={`text-[22px]  font-[400] text-center text-secondary`}
                >
                    لَبَّيْكَ اللَّهُمَّ لَبَّيْك
                </p>
                <h2 className="w-full lg:w-[50%] text-[52px] font-[700] cinzel-title text-center leading-snug">
                    {preTitle}
                    <span className="text-secondary">{middleTitle}</span>
                    {postTitle}
                </h2>
                <p className="w-[75%] text-[18px] font-[300] text-center">
                    {miniDescription}
                </p>
                <div className="w-full flex justify-center">
                    <TransparentButton text="Read Guidlines" />
                </div>
            </div>
        </div>
    );
}

export default HeroOfGuides;
