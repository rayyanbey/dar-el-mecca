import React from "react";
import TransparentButton from "../_components/TransparentButton";

function Hero() {
    return (
        <div className="relative w-full h-[165vh] lg:h-[90vh]">
            <img src="../test2.jpeg" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white bg-opacity-[88%]"></div>
            <div className="absolute inset-0 flex flex-col w-full items-center justify-center gap-6">
                <p className="text-[18px]  font-[300] text-center capitalize">Educate yourself</p>
                <h2 className="w-full  text-[52px] font-[700] cinzel-title text-center leading-snug">
                Hajj and Umrah <span className="text-secondary">Guide</span>
                </h2>
                <p className="w-[75%] text-[18px] font-[300] text-center">
                Performing Hajj and Umrah in accordance with the true teachings of Islam is a sacred duty. Discover comprehensive guidance on these pilgrimages through the lens of the Quran and Sunnah. Visit our Resources section to learn more.
                </p>
                <div className="w-full flex justify-center">
                    <TransparentButton text="View All Resources" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
