import React from "react";
import ContactCard from "./ContactCard";
import CallUs from "../_icons/CallUs";
import Whatsapp from "../_icons/Whatsapp";
import Message from "../_icons/Message";

function ContactDetails() {
  const cards = [
    {
      icon: <Message width="35" height="35" />,
      title: "Have any Questions?",
      content: [
        "info@darelmecca.com",
        "darelmecca94@gmail.com",
        "darelmecca@gmail.com"
      ]
    },
    {
      icon: <CallUs width="35" height="35" />,
      title: "Call Us",
      content: [
        "+1 919-426-2061",
        "+1 919-410-9557",
        "+1 984-389-3054"
      ]
    },
    {
      icon: <Message width="35" height="35" />,
      title: "Whatsapp",
      content: ["+1 984-389-3054", "+1 919-410-9557", "+1 919-426-2061"]
    },
    {
      icon: <Message width="35" height="35" />,
      title: "Operational Hours",
      content: ["Monday-Saturday: 10:00AM - 07:00PM EST"]
    },
    {
      icon: <Message width="35" height="35" />,
      title: "Address",
      content: ["4801 Glenwood Avenue Suite#200,", "Raleigh, North Carolina, 27612"]
    },
    {
      icon: <Message width="35" height="35" />,
      title: "Document Mailing",
      content: ["3332 Althorp Drive,", "Raleigh North Carolina, 27616"]
    },
    {
      icon: <Message width="35" height="35" />,
      title: "Fax Number",
      content: ["+1 (919) 310 4065"]
    }
  ];

  return (
    <section className="w-full flex flex-col gap-6 justify-center items-center py-6 lg:py-16">
      <div>
        <h2 className="text-[28px] lg:text-[32px] text-center cinzel-title font-[700]">
          Contact details
        </h2>
        <p className="text-[18px] text-center font-[300] py-3">
          All our contact details are mentioned below.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center max-w-7xl mx-auto px-4">
        {cards.map((card, index) => (
          <ContactCard
            key={index}
            icon={card.icon}
            title={card.title}
          >
            {card.content.map((line, lineIndex) => (
              <p key={lineIndex}>{line}</p>
            ))}
          </ContactCard>
        ))}
      </div>
    </section>
  );
}

export default ContactDetails;