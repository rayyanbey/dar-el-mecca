import services from "../_data/services";
import ServiceCard from "./ServiceCard";
export function  Services() {
    return (
        <section id="home-services" className="w-full flex flex-col justify-center items-center py-6 lg:py-16">
            <h2 className="text-[32px] text-center cinzel-title font-[700] ">Our Services</h2>
            <p className="text-[18px] text-center font-[300] py-3">
                We provide 3 types of tours for our clients, We arrange high quality tours with exceptional support.
            </p>
            <div className="flex flex-col lg:flex-row justify-center flex-wrap gap-10 py-4 ">
                {services.map((service) => (
                    <ServiceCard
                        key={service.title}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        link={`/${service.type}-packages/all`}
                    />
                ))}
            </div>
        </section>
    );
}
