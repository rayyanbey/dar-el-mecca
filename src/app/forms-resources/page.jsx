import React from "react";
import HeroContactFAQAboutForm from "../_components/HeroContactFAQAboutForm";
import DocumentsSection from "./DocumentsSection";

function page() {
    return (
        <>
            <HeroContactFAQAboutForm
                title={"Forms & Resources"}
                description={
                    "Lorem ipsum dolor sit amet. Et exercitationem veniam hic odio magni et earum officiis hic nostrum quam est fuga repudiandae. Est harum consequatur in reiciendis fugiat eum adipisci temporibus ab magni saepe."
                }
            />
            <DocumentsSection />
        </>
    );
}

export default page;
