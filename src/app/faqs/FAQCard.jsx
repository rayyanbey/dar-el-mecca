'use client';
import React, {useState} from "react";
import CloseIcon from "../_icons/CloseIcon";

function FAQCard({title, QandA}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={`bg-tertiary p-3 px-4 border border-[#00000014] ${isOpen ? "rounded-3xl " : "rounded-full"}`}>
            <div className="flex justify-between items-center cursor-pointer " onClick={toggleFAQ}>
                <h5
                    className={`font-[${isOpen ? "700" : "300"}] ${isOpen ? "text-primary" : "text-black"} text-[18px]`}
                >
                    {title}
                </h5>
                <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    <CloseIcon />
                </span>
            </div>
            {isOpen && (
                <div className="pt-4 text-[18px] font-[300] transition-all duration-300">
                    {QandA.map((item) => {
                        return(
                        <div className="py-2">
                            <h6 className="font-[600]">Q: {item.q}</h6>
                            <p>A: {item.a}</p>
                        </div>);
                    })}
                </div>
            )}
        </div>
    );
}

export default FAQCard;
