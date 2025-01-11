import React from "react";
import BookSeat from "../[snug]/BookSeat";
import AllPackages from "../[snug]/AllPackages";
import Hero from "../[snug]/Hero";

async function page({params}) {
    await params;
    const category = String(params.category);
    const res = await fetch(`http://localhost:3000/pages/apis/events/${category}/all`);
    const resData = await res.json();
    if (resData.status === "error") {
        redirect("/error");
    }
    const data = resData.data;
    console.log(data);
    return (
        <>
            <Hero
                image={data[0].images[0]}
                titleToDisplay={data[0].titleToDisplay}
                tagline={data[0].tagline}
                miniDescription={data[0].miniDescription}
            />
            <AllPackages data={data}/>
            <BookSeat image={data[0].images[2]} />
        </>
    );
}
export default page;
