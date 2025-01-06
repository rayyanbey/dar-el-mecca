import React from "react";
import TransparentButton from "../../_components/TransparentButton";

function Hero() {
    return (
        <div className="relative w-full h-[165vh] lg:h-[90vh]">
            <img src="../test2.jpeg" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white bg-opacity-[88%]"></div>
            <div className="absolute inset-0 flex flex-col w-full items-center justify-center gap-6">
                <p className="text-[22px] text-secondary font-[400] text-center">لَبَّيْكَ اللَّهُمَّ لَبَّيْك</p>
                <h2 className="w-full lg:w-[50%] text-[52px] font-[700] cinzel-title text-center leading-snug">
                    07 Nights February <span className="text-secondary">Umrah Package</span> from USA 2025
                </h2>
                <p className="w-[75%] text-[18px] font-[300] text-center">
                    Lorem ipsum dolor sit amet. Et exercitationem veniam hic odio magni et earum officiis hic nostrum
                    quam est fuga repudiandae. Est harum consequatur in reiciendis fugiat eum adipisci temporibus ab
                    magni saepe.
                </p>
                <div className="w-full flex justify-center">
                    <TransparentButton text="View Package Details" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
