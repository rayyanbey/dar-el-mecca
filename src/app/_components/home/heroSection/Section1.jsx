import React from 'react'
import Image from "next/image";
import AllTourDetailButton from "./AllTourDetailButton";
import { Plane } from '../../../_icons/Plane';
import '../../../_styles/plane-animation.css'

export default function Section1() {
    return (
        <section
            style={{
                backgroundImage: "url('/images/hero-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="w-full flex flex-col gap-8 lg:gap-0 items-center p-3 lg:p-0 lg:flex-row "
        >
            <div className="flex flex-col w-full lg:w-[60%]  lg:p-24 gap-8 justify-center ">
                <div className="cinzel-title text-4xl lg:text-5xl leading-snug">
                    <h1>
                        Explore The <span className="text-secondary">Umrah </span> and{" "}
                        <span className="text-secondary">Hajj</span> Packages From USA 2024
                    </h1>
                </div>
                <h4 className="text-[18px] font-[300] leading-tight">
                    A prominent pioneer in crafting A-grade Umrah Experiences, Nurturing Faith, and Guiding Pilgrims in
                    the USA. Since its inception, the organization has consistently expanded its reach
                </h4>

                <div className="flex items-center gap-2">
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="w-[40px] h-[40px] rounded-full border-2 border-secondary overflow-hidden"
                            >
                                <Image
                                    src={"/test.jpg?height=48&width=48"}
                                    alt="Pilgrim"
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="font-[300] text-[16px]">
                        <p>More Than</p>
                        <p className="text-secondary font-[600]">3425 Pilgrims</p>
                    </div>
                </div>
                <AllTourDetailButton />
            </div>

            <div className="w-full lg:w-[40%] h-[105vh] flex flex-col items-center lg:justify-center">
                <div className="bg-transparent border-[1px]  border-[#caa46fad] border-dashed w-full lg:w-[70%] h-[80%] flex items-end rounded-t-full">
                    <div className="relative bg-secondary w-full h-[90%] rounded-t-full">
                        <p className="absolute -top-6 left-[50%] transform -translate-x-1/2 z-20 px-2 py-2 lg:py-3 lg:px-3 font-[400] text-[14px] lg:text-[22px] text-white rounded-lg bg-secondary KFG-title">
                            لَبَّيْكَ اللَّهُمَّ لَبَّيْك
                        </p>
                        <img
                            className="rounded-t-full absolute left-2 -top-2 w-[97.2%] lg:w-[98%] h-[100%]  object-cover"
                            src={"/images/hero-main.jpeg"}
                            alt="Hero Main"
                        />
                        <div className='animatse-plane'>
                            <Plane/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
