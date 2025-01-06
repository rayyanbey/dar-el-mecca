import React from "react";
import Message from "../_icons/Message";

function ContactCard() {
    return (
        <div className="flex flex-col justify-center items-center gap-2 p-4 md:px-16 md:py-5 bg-tertiary rounded-lg border-[1px] border-[#00000014]   ">
            <div className="bg-secondary py-1 px-3 rounded-lg">
                <Message width="35" height="35" />
            </div>
            <h6 className="font-[700] text-[20px] cinzel-title">Have any Questions?</h6>
            <div className="flex flex-col justify-center items-center text-[18px] font-[300]">
                <p>info@darelmecca.com </p>
                <p>darelmecca94@gmail.com</p>
                <p>darelmecca@gmail.com</p>
            </div>
        </div>
    );
}

export default ContactCard;
