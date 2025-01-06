"use client";

import React from "react";
import FAQCard from "./FAQCard";

function FAQ() {
    const q_a = [
        {
            title: "Flight booking related queries",
            QandA: [
                {
                    q: "How do I know my booking is confirmed?",
                    a: "After completing your payment process, booking confirmation will be sent to you through e-mail along with your flight ticket.",
                },
                {
                    q: "Can I modify my booking?",
                    a: "Yes, you can modify your booking through your account settings or by contacting our support team.",
                },
            ],
        },
        {
            title: "Hotel booking related queries",
            QandA: [
                {
                    q: "How do I check hotel policies?",
                    a: "Hotel policies can be found on the hotel's booking page.",
                },
                {
                    q: "Can I book on behalf of someone else?",
                    a: "Yes, you can book a hotel on behalf of someone else.",
                },
            ],
        },
    ];

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
            {q_a.map((item, index) => (
                <FAQCard key={index} title={item.title} QandA={item.QandA} />
            ))}
        </section>
    );
}

export default FAQ;
