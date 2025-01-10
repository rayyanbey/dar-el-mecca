import React from "react";
import BrownButton from "../../_components/BrownButton";
import TransparentButton from "../../_components/TransparentButton";

function BookSeat({image="./test.jpg"}) {
    return (
        <section className="bg-tertiary px-6  lg:px-20 py-10 lg:py-20 flex flex-col lg:gap-6 lg:flex-row items-center">
            {/* Form Section */}
            <div className="w-full lg:w-[65%]  space-y-6">
                <h2 className="cinzel-title text-[32px] font-[700]">Book Your Seat</h2>
                <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[16px] font-[400]" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Enter your First Name"
                            className="p-2 border-[1px] border-[#C4C4C4] rounded-full pl-4 placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#787878] "
                        />
                    </div>
                    {/* Last Name */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[16px] font-[400]" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter your Last Name"
                            className="p-2 border-[1px] border-[#C4C4C4] rounded-full pl-4 placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#787878] "
                        />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[16px] font-[400]" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your Email"
                            className="p-2 border-[1px] border-[#C4C4C4] rounded-full pl-4 placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#787878] "
                        />
                    </div>
                    {/* Telephone */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[16px] font-[400]" htmlFor="telephone">
                            Telephone
                        </label>
                        <input
                            type="tel"
                            id="telephone"
                            placeholder="Enter your Telephone"
                            className="p-2 border-[1px] border-[#C4C4C4] rounded-full pl-4 placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#787878] "
                        />
                    </div>
                    {/* Address */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[16px] font-[400]" htmlFor="address">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Enter your Address"
                            className="p-2 border-[1px] border-[#C4C4C4] rounded-full pl-4 placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#787878] "
                        />
                    </div>
                    {/* City */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[16px] font-[400]" htmlFor="city">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            placeholder="Enter your City"
                            className="p-2 border-[1px] border-[#C4C4C4] rounded-full pl-4 placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#787878] "
                        />
                    </div>
                    {/* Package */}
                    <div className="flex flex-col gap-3 lg:col-span-2">
                        <label className="text-[16px] font-[400]" htmlFor="package">
                            Choose Package *
                        </label>
                        <select
                            id="package"
                            className="px-4 py-2 border-[1px] border-[#C4C4C4] rounded-full placeholder:text-[16px] font-[400] text-[#787878] "
                        >
                            <option value="7N">07 Nights February Umrah Package</option>
                            <option value="10N">10 Nights March Umrah Package</option>
                            <option value="15N">15 Nights Ramadan Umrah Package</option>
                        </select>
                    </div>
                    {/* Occupancy */}
                    <div className="flex flex-col gap-3 lg:col-span-2">
                        <label className="text-[16px] font-[400]">Choose Occupancy *</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    id="double"
                                    type="checkbox"
                                    value="Double"
                                    className="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-secondary"
                                />
                                <span className="font-[400] text-[18px] text-[#787878]">Double</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    id="triple"
                                    type="checkbox"
                                    value="Triple"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="font-[400] text-[18px] text-[#787878]">Triple</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    id="quad"
                                    type="checkbox"
                                    value="Quad"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="font-[400] text-[18px] text-[#787878]">Quad</span>
                            </label>
                        </div>
                    </div>
                    {/* Message */}
                    <div className="flex flex-col gap-3 lg:col-span-2">
                        <label className="text-[16px] font-[400]" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Enter your Message"
                            rows="1"
                            className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-primary-light"
                        ></textarea>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-col gap-3">
                        <div>
                            <BrownButton text={"Send Message"} />
                        </div>
                        <p className=" text-[#787878]">or</p>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <TransparentButton text={"Call Us"} />
                            <TransparentButton text={"Contact on Whatsapp"} />
                        </div>
                    </div>
                </form>
            </div>
            {/* Image Section */}
            <div className="flex justify-center lg:justify-end w-full lg:w-[40%]   h-[120vh] lg:h-[90vh]  mt-10 lg:mt-0 ">
                <div className="relative bg-secondary w-[95%]  h-full lg:h-full rounded-t-full">
                    <img
                        className="rounded-t-full absolute left-2 -top-2 w-[97.2%] lg:w-[98%] h-[100%] object-cover"
                        src={image}
                        alt="Hero Main"
                    />
                </div>
            </div>
        </section>
    );
}

export default BookSeat;
