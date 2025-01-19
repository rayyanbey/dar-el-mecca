import ServiceCard from "./ServiceCard";

const services = [
    {
        type: "U",
        title: "Umrah Packages",
        description:
            "Discover Umrah services tailored for USA and all over the world. We handle visas, accommodations, and transport, ensuring a hassle-free spiritual journey.",
        image: "/images/umrah-service.jpeg",
    },
    {
        type: "H",
        title: "Hajj Packages",
        description:
            "Embark on a tailored Hajj journey with Darelmecca Travel where affordability meets top notch service, ensuring comfort and spiritual fulfilment.",
        image: "/images/hajj-service.jpeg",
    },
    {
        type: "T",
        title: "Tour Packages",
        description:
            "Embark on a Journey of Faith with Darelmecca Travel. Our tours ensure seamless, affordable pilgrimages for a transformative spiritual experience.",
        image: "/images/tour-service.jpeg",
    },
];

export function Services() {
    return (
        <section className="w-full flex flex-col justify-center items-center py-6 lg:py-16">
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
                        type={service.type}
                    />
                ))}
            </div>
        </section>
    );
}
