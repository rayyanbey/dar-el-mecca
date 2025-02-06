'use client'
import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import CallUs from "../_icons/CallUs";
import Whatsapp from "../_icons/Whatsapp";
import Message from "../_icons/Message";
import OperationalHours from "../_icons/OperationalHours";
import Location from "../_icons/Location";
import Fax from "../_icons/Fax";
import BgMessage from "../_icons/BgMessage";
import BgPhone from "../_icons/BgPhone";
import BgWhatsapp from "../_icons/BgWhatsapp";
function ContactDetails() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/pages/apis/company/getCompanyInformation`);
        const result = await response.json();

        if (result.status === "success") {
          const { address, contactInformation, operationalHours } = result.data;

          const mappedCards = [
            {
              icon: <BgMessage/>,
              title: "Have any Questions?",
              content: contactInformation.email,
            },
            {
              icon: <BgPhone/>,
              title: "Call Us",
              content: contactInformation.phoneNumbers,
            },
            {
              icon: <BgWhatsapp/>,
              title: "Whatsapp",
              content: contactInformation.whatsapp,
            },
            {
              icon: <OperationalHours />,
              title: "Operational Hours",
              content: operationalHours
                .filter((hour) => hour.schedule !== "Closed")
                .map((hour) => `${hour.days}: ${hour.schedule}`),
            },
            {
              icon: <Location />,
              title: "Address",
              content: [address.address],
            },
            {
              icon: <Location />,
              title: "Document Mailing",
              content: [address.documentAddress],
            },
            {
              icon: <Fax />,
              title: "Fax Number",
              content: contactInformation.faxNumbers,
            }
          ];

          setCards(mappedCards);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
          <ContactCard key={index} icon={card.icon} title={card.title}>
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