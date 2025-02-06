import React from "react";
import BrownButton from "../_components/BrownButton";
import ScrollButton from "../_components/ScrollButton";

function Description() {
    return (
        <div className="flex flex-col items-center gap-8 py-4 lg:py-16 px-4 lg:px-20 ">
            <h1 className="lg:w-[60%] cinzel-title font-[700] text-[32px] text-center">
                Dar El Mecca Travel is located in Raleigh, North Carolina.
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-center w-full   ">
                <div className="w-full lg:w-[64%] p-2 font-[300] text-[18px] flex flex-col gap-4 ">
                    <p>
                        This is a blessed and divine journey performed in the name of Allah. The numerous benefits
                        obtained by the performance of this pilgrimage are beyond imaginable.
                    </p>
                    <p>
                        Customer satisfaction is our top priority . We want to give best possible customer service . We
                        always believe in satisfying our customer and provide them what they want, that is how we
                        maintain quality.
                    </p>
                    <p>
                        We value our clients and take pride in serving them in the most proper way and we make it our
                        priority to ensure a comfartable Hajj and Umrah experience.
                    </p>
                    <p>
                        The reason our Packages are rated as one of the best in market because of the prices and quality
                        of service . We are able to compete in the market only because we provide cost effective
                        solution to our clients.
                    </p>
                    <p>Best Price Guaranteed.!</p>
                </div>
                <div className="w-full lg:w-[35%]  flex justify-end">
                    <img src="./images/Carolina.jpeg" className="rounded-3xl w-full lg:w-[100%] h-[50vh]  object-cover" alt="" />
                </div>
            </div>
            <div>
                <ScrollButton text="View our Packages" id={"home-services"} brown={true}/>
            </div>
        </div>
    );
}

export default Description;
