import React from "react";
import BookSeat from "../[snug]/BookSeat";
import AllPackages from "../[snug]/AllPackages";
import Hero from "../[snug]/Hero";
import Categories from "../../_enums/packagesCategories";

async function page({params}) {
    
    await params;
    const category = String(params.category);
    const res = await fetch(`${process.env.HOST_NAME}/pages/apis/events/${category}/all`);
    const resData = await res.json();
    if (resData.status === "error") {
        redirect("/error");
    }

    
    const data = resData.data;
    console.log(data);
    const firstKey = Object.keys(data)[0];
    return (
        <>
            <Hero
                image={data[firstKey]?.[0]?.images?.[0]}
                category={category[0]}
                preTitle={"All "}
                middleTitle={`${
                    category[0] == Categories.TOUR
                        ? "World Tour Packages "
                        : category[0] == Categories.HAJJ
                        ? "Hajj Packages "
                        : "Umrah Packages "
                }`}
                tagline={category[0] == "H" || category[0] == "U" ? "لَبَّيْكَ اللَّهُمَّ لَبَّيْك" : "EXPLORE WORLD"}
                miniDescription={`${
                    category[0] == Categories.TOUR
                        ? "World Tour Packages"
                        : category[0] == Categories.HAJJ
                        ? "Hajj Packages"
                        : "Umrah Packages"
                }`}
            />
            <AllPackages category={category[0]} data={data} />
            <BookSeat image={data[firstKey]?.[0]?.images?.[0]} />
        </>
    );
}
export default page;
