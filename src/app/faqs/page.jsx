import React from "react";
import HeroContactFAQAboutForm from "../_components/HeroContactFAQAboutForm";
import FAQ from "./FAQ";
export const metadata = {
    title: "FAQ"
};

function page() {
    return (
        <>
            <HeroContactFAQAboutForm title={"FAQ’S"} description={"Have questions? Check out our list of frequently asked questions below!Explore the FAQs or reach out to us directly using our dedicated contact information."} />
            <FAQ/>
        </>
    );
}

export default page;
