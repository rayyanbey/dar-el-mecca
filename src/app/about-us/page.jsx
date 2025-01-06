import React from "react";
import HeroContactFAQAboutForm from "../_components/HeroContactFAQAboutForm";
import { Services } from "../_components/Services";
import Description from "./Description";

function page() {
    return (
        <section>
            <HeroContactFAQAboutForm
                title={"About Us"}
                description={
                    "Lorem ipsum dolor sit amet. Et exercitationem veniam hic odio magni et earum officiis hic nostrum quam est fuga repudiandae. Est harum consequatur in reiciendis fugiat eum adipisci temporibus ab magni saepe."
                }
            />
            <Description/>
            <Services/>
        </section>
    );
}

export default page;
