import React from "react";
import Hero from "./Hero";
import ServiceCard from "../_components/ServiceCard";
import hajjAndUmrahguides from "../_data/guides";
export const metadata = {
    title: "Hajj and Umrah Guides"
};

function page() {
    return (
        <section>
            <Hero />
            <section id="guides-section" className="w-full flex flex-col justify-center items-center py-6 lg:py-16">
                <h2 className="text-[32px] text-center cinzel-title font-[700] ">All Resources</h2>
                <p className="text-[18px] text-center font-[300] py-3">
                    Read below about all our detailed guides about Umrah and Hajj.
                </p>
                <div className="flex flex-col lg:flex-row justify-center flex-wrap gap-10 py-4 ">
                    {hajjAndUmrahguides.map((service) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            link={service.link}
                        />
                    ))}
                </div>
            </section>
        </section>
    );
}

export default page;
