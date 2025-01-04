import React from "react";

const stats = [
    {
        title: "3425+",
        subtitle: "Happy Travellers",
    },
    {
        title: "95%",
        subtitle: "Success Travellers",
    },
    {
        title: "4.9★",
        subtitle: "52 Clients Rating",
    },
    {
        title: "9+",
        subtitle: "Travel Destinations",
    },
];

function Stats() {
    return (
        <section className="bg-secondary text-white py-16">
            <div className="flex w-full flex-col  lg:flex-row flex-wrap ">
                {stats.map((stat, index) => (
                    <React.Fragment key={index}>
                        <div className="w-full lg:w-1/4 flex flex-col lg:flex-row items-center lg:items-start  h-full ">
                            <div className="flex flex-col items-center lg:items-start  px-0 lg:px-20">
                                <h1 className="text-start cinzel-title text-[32px] font-[700]">{stat.title}</h1>
                                <h2 className="text-[18px] font-[300]">{stat.subtitle}</h2>
                            </div>
                            {index !== stats.length - 1 && (
                                <div className="hidden lg:block w-[1px] h-[80px] bg-white opacity-30 "></div>
                            )}
                            {index !== stats.length - 1 && (
                                <div className="block lg:hidden w-[90%] h-[1px] bg-white opacity-30 my-4"></div>
                            )}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

export default Stats;
