import React from "react";
import Hero from "./Hero";
import ServiceCard from "../_components/ServiceCard";
const services = [
    {
        title: "Hajj Guide",
        description:
            "You can read about our detailed guide of Hajj. It includes all the steps to perform Hajj, and all the DUAs are mentioned in our detailed Hajj guide.",
        image: "/images/hajj-service.jpeg",
    },
    {
        title: "Umrah Guide",
        description:
            "You can read about our detailed guide of Umrah. It includes all the steps to perform Umrah, and all the DUAs are mentioned in our detailed Umrah guide.",
        image: "/images/umrah-service.jpeg",
    },
    {
        title: "Hajj and Umrah Essentials",
        description:
            "You can read about our detailed guide of Hajj and Umrah Essentials. It includes all the essentials to perform Umrah and Hajj.",
        image: "/test2.jpeg",
    },
];

function page() {
    return (
        <section>
            <Hero />
            <section className="w-full flex flex-col justify-center items-center py-6 lg:py-16">
                <h2 className="text-[32px] text-center cinzel-title font-[700] ">All Resources</h2>
                <p className="text-[18px] text-center font-[300] py-3">
                    Read below about all our detailed guides about Umrah and Hajj.
                </p>
                <div className="flex flex-col lg:flex-row justify-center flex-wrap gap-10 py-4 ">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                        />
                    ))}
                </div>
            </section>
        </section>
    );
}

export default page;
