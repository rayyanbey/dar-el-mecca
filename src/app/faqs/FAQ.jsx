import React from "react";
import FAQCard from "./FAQCard";
import {FAQ_data} from "../_data/FAQ";
function FAQ() {
    return (
        <section className="flex flex-col gap-3 px-4 lg:px-14 py-10 lg:py-16">
            <div>
                <h2 className="text-[28px] lg:text-[32px] text-center cinzel-title font-[700] ">
                    FREQUENTLY ASKED QUESTIONS
                </h2>
                <p className="text-[18px] text-center font-[300] py-3">
                    Below are detailed queries about all our customers questions.
                </p>
            </div>
            {FAQ_data.map((item, index) => (
                <FAQCard key={index} title={item.title} QandA={item.QandA} />
            ))}
        </section>
    );
}

export default FAQ;
