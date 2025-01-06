import React from "react";
import ContactCard from "./ContactCard";

function ContactDetails() {
    return (
        <section className="w-full flex flex-col gap-6 justify-center items-center py-6 lg:py-16">
            <div>
            <h2 className="text-[28px] lg:text-[32px] text-center cinzel-title font-[700] ">Contact details</h2>
            <p className="text-[18px] text-center font-[300] py-3">All our contact details are mentioned below.</p>
            </div>
            <div className='flex flex-wrap gap-8 justify-center'>
            <ContactCard/>
            <ContactCard/>
            <ContactCard/>
            <ContactCard/>
            <ContactCard/>
            </div>
        </section>
    );
}

export default ContactDetails;
