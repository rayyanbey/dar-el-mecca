import BrownHotel from "../../_icons/BrownHotel";
import DepartPlane from "../../_icons/DepartPlane";
import ReturnPlane from "../../_icons/ReturnPlane";
import Visa from "../../_icons/Visa";

function Description({title, bigDescriptionTitle, bigDescription, duration, image, pricing, visa, hotels}) {
    return (
        <section className="flex flex-col lg:flex-row gap-20 lg:justify-between  lg:gap-0  lg:p-20 ">
            <div className="w-full lg:w-[60%] flex flex-col gap-10 leading-snug p-3 lg:p-0">
                <div className="flex flex-col gap-2">
                    <h3 className="font-[300] text-[18px]">{title} Details</h3>
                    <h5 className="font-[700] cinzel-title text-[32px]">{bigDescriptionTitle}</h5>
                </div>
                <img src={image} className="w-full h-[50%] object-cover rounded-[30px]" alt="" />
                <p className="font-[300] text-[18px]">{bigDescription}</p>
            </div>
            <div className="flex flex-col bg-tertiary w-[95%] lg:w-[35%] rounded-t-full border-[1px] border-[#00000014]  justify-center p-6 m-2 lg:p-8 gap-6">
                <div className="w-[50%] flex flex-col items-center mx-auto ">
                    <h3 className="font-[700] cinzel-title text-[32px] text-center">
                        {title.split(" ").slice(0, 2).join(" ")}
                    </h3>
                    <p className="font-[400] px-3 text-center bg-[#A8854E26] rounded-3xl text-[16px] ">
                        {duration} Nights
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="w-full h-[1px] bg-[#00000014]"></div>
                    <div className="flex items-center gap-2">
                        <DepartPlane />
                        <p className="font-[400] opacity-80  text-[16px]">Depart from IAD-MED: 20 FEB</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <ReturnPlane />
                        <p className="font-[400] opacity-80  text-[16px]">Return from JED-IAD: 28 FEB</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <DepartPlane />
                        <p className="font-[400] opacity-80  text-[16px]">Depart from JFK-MED: 20 FEB</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <ReturnPlane />
                        <p className="font-[400] opacity-80  text-[16px]">Return from IAD-MED: 20 FEB</p>
                    </div>
                    {hotels.map((hotel) => (
                        <div className="flex items-center gap-2">
                            <BrownHotel />
                            <p className="font-[400] opacity-80  text-[16px]">{hotel.name}</p>
                        </div>
                    ))}
                    <div className="flex items-center gap-2">
                        <Visa />
                        <p className="font-[400] opacity-80 text-[16px]">
                            {visa == "Y" ? "Visa Included" : "Visa Not Included"}
                        </p>
                    </div>
                    <div className="w-full h-[1px] bg-[#00000014]"></div>
                </div>
                <p className="font-[600] text-[20px] opacity-80">Pricing</p>
                <div className="flex flex-col gap-3">
                    {Object.keys(pricing).map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <h6 className="font-[300] text-[20px] opacity-80">{item}</h6>
                            <h6 className="font-[600] text-[32px] cinzel-title text-secondary opacity-80">
                                ${pricing[item]}
                            </h6>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Description;
