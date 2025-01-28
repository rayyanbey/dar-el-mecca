import React from 'react';
import Card from './Card';

const data = [
    {
        heading: "HOW DO I ENTER INTO THE STATE OF IHRAM?",
        description: [
            "A Muslim enters into the state of Ihram at the place specified by Sharia, and shall abstain from the Ihram prohibitions, He shall recite Talbiyah, saying: \"Labbayka Allaahumma Labbayk, Labbayka La Shareeka Laka Labbayk. Innal Hamda Wan-ni'mata Laka Wal-Mulk, La Shareeka Lak\" ",
            "(Translation: Here I am at your service, o Allah, at Your service! At Your service! You have no partner! I am at Your service! Indeed, all praise and grace belong to You, and so does the supreme authority. You have no partner)"
        ],
        pic: "./images/umrah-guide/pic1.png"
    },
    {
        heading: "CIRCUMAMBULATION (TAWAF):",
        description: [
            "He/she goes to the Haram.",
            "When the Kaaba is to the left, they circumambulate (counterclockwise).",
            "He begins and ends at the Black Stone.",
            "After completion of the seven rounds, you pray two Rakaah in an appropriate place."
        ],
        pic: "./images/umrah-guide/pic2.png"
    },
    {
        heading: "SA'I (BETWEEN SAFA AND MARWA):",
        description: [
            "He/she heads to Safa where he starts Sa’i towards Marwa. Once reaching Marwa, you have completed one round. Crossing the distance back to Safa fulfills the second round, and so on until the seventh round ends at Marwa."],
        pic: null
    },
    {
        heading: "HAVING HAIR OF THE HEAD SHAVEN OR TRIMMED:",
        description: [
            "After completing Sa’i, men go to the barber shops to have their hair shaven or trimmed.",
            "Women gather their hair and cut from its ends about (1-2 cm).",
            "With this act, the Umrah would be completed, marking the end of Ihram."
        ],
        pic: "./images/umrah-guide/pic3.jpeg"
    }
];

function Info() {
    return (
        <section className='flex flex-col gap-20 lg:gap-28 w-full justify-between p-6 lg:p-16'>
            {data.map((item, index) => (
                <Card
                    key={index}
                    heading={item.heading}
                    description={item.description}
                    pic={item.pic}
                />
            ))}
        </section>
    );
}

export default Info;
