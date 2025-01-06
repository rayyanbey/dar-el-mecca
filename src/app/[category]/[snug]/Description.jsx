import BrownHotel from "../../_icons/BrownHotel";
import DepartPlane from "../../_icons/DepartPlane";
import ReturnPlane from "../../_icons/ReturnPlane";
import Visa from "../../_icons/Visa";

function Description() {
    return (
        <section className="flex flex-col lg:flex-row gap-20 lg:justify-between  lg:gap-0  lg:p-20 ">
            <div className="w-full lg:w-[60%] flex flex-col gap-10 leading-snug p-3 lg:p-0">
                <div className="flex flex-col gap-2">
                    <h3 className="font-[300] text-[18px]">07 Nights February Umrah Package Details</h3>
                    <h5 className="font-[700] cinzel-title text-[32px]">Elevate Your Faith</h5>
                </div>
                <img src="../test2.jpeg" className="w-full h-[50%] object-cover rounded-[30px]" alt="" />
                <p className="font-[300] text-[18px]">
                    Discover spiritual fulfillment with our 07 Nights February 2024 Umrah Package from USA. Tailored for
                    a seamless pilgrimage experience, it combines comfort, convenience, and a sacred journey to the holy
                    sites. Book now for a transformative Umrah experience.
                </p>
            </div>
            <div className="flex flex-col bg-tertiary w-[95%] lg:w-[35%] rounded-t-full border-[1px] border-[#00000014]  justify-center p-6 m-2 lg:p-8 gap-6">
                <div className="w-[50%] flex flex-col items-center mx-auto ">
                    <h3 className="font-[700] cinzel-title text-[32px] text-center">February Umrah</h3>
                    <p className="font-[400] px-3 text-center bg-[#A8854E26] rounded-3xl text-[16px] ">7 Nights</p>
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
                    <div className="flex items-center gap-2">
                        <BrownHotel />
                        <p className="font-[400] opacity-80  text-[16px]">5 Star Swissotel Makkah</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <BrownHotel />
                        <p className="font-[400] opacity-80  text-[16px]">5 Star Anwar Al Medina Movenpick</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Visa />
                        <p className="font-[400] opacity-80  text-[16px]">Visa Included</p>
                    </div>
                    <div className="w-full h-[1px] bg-[#00000014]"></div>
                </div>
                <p className="font-[600] text-[20px] opacity-80">Pricing</p>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <h6 className="font-[300] text-[20px] opacity-80">Quad Price</h6>
                        <h6 className="font-[600] text-[32px] cinzel-title text-secondary opacity-80">$2400</h6>
                    </div>
                    <div className="flex justify-between items-center">
                        <h6 className="font-[300] text-[20px] opacity-80">Triple Price</h6>
                        <h6 className="font-[600] text-[32px] cinzel-title text-secondary opacity-80">$2500</h6>
                    </div>
                    <div className="flex justify-between items-center">
                        <h6 className="font-[300] text-[20px] opacity-80">Double Price</h6>
                        <h6 className="font-[600] text-[32px] cinzel-title text-secondary opacity-80">$2700</h6>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Description;
