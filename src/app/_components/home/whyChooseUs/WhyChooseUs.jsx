import Food from "../../../_icons/Food";
import Hotel from "../../../_icons/Hotel";
import Laguage from "../../../_icons/Laguage";
import Support from "../../../_icons/Support";
import FacilityCard from "./FacilityCard";

export function WhyChooseUs() {
    const facilities = [
        {
            component: <Hotel />,
            title: "5 Star Hotel",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            component: <Food />,
            title: "Food Included",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            component: <Laguage />,
            title: "Free Luggage",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            component: <Support />,
            title: "24/7 Support",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];
    return (
        <section className="w-full flex flex-col lg:flex-row bg-[#F6F3ED] py-10">
            <div className="flex flex-col w-full lg:w-[65%] p-6 lg:p-24 items-start  justify-center gap-8 ">
                <h2 className="font-[300] text-[20px]">Why Choose Us</h2>
                <h3 className="font-[700]  text-[32px] cinzel-title">
                    We Are The Best Partner For Your Hajj and Umrah Journey
                </h3>
                <div className=" w-full flex flex-wrap ">
                    {facilities.map((facility) => (
                        <FacilityCard
                            key={facility.title}
                            component={facility.component}
                            title={facility.title}
                            description={facility.description}
                        />
                    ))}
                </div>
            </div>
            <div className="flex w-full lg:w-[35%] h-[50vh] lg:h-[100vh] justify-center  items-center">
                <div className="relative bg-secondary w-[70%] h-full lg:h-3/4 rounded-t-full">
                    <img
                        className="rounded-t-full absolute left-2 -top-2 w-[97.2%] lg:w-[98%] h-[100%]  object-cover"
                        src={"/images/hero-main.jpeg"}
                        alt="Hero Main"
                    />
                </div>
            </div>
        </section>
    );
}
