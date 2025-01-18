import React from "react";
import Hero from "./Hero";
import Description from "./Description";
import PackageDetail from "./PackageDetail";
import BookSeat from "./BookSeat";
import AllPackages from "./AllPackages";
import {redirect} from "next/navigation";

async function page({params}) {
    console.log(params.category, params.snug);
    await params;
    const snug = String(params.snug);
    const category = String(params.category);
    const res = await fetch(`http://localhost:3000/pages/apis/events/${category}/${snug}`);
    const resData = await res.json();
    if (resData.status === "error") {
        redirect("/error");
    }
    const data = resData.data;
    console.log(data);
    return (
        <div>
            <Hero
                image={data.images[0]}
                titleToDisplay={data.titleToDisplay}
                tagline={data.tagline}
                miniDescription={data.miniDescription}
            />
            <Description
                title={data.title}
                bigDescriptionTitle={data.bigDescriptionTitle}
                bigDescription={data.bigDescription}
                duration={data.duration}
                image={data.images[1]}
                pricing={data.pricing}
                visa={data.visa}
                hotels={data.eventDetails.hotels}
            />
            <div className="w-full h-[1px] bg-[#00000014]"></div>
            <PackageDetail eventDetails={data.eventDetails} />
            <BookSeat image={data.images[2]} />
        </div>
    );
}

export default page;
