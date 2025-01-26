import React from "react";
import Hero from "./Hero";
import Description from "./Description";
import PackageDetail from "./PackageDetail";
import BookSeat from "./BookSeat";
import {redirect} from "next/navigation";
import Categories from "../../_enums/packagesCategories";

async function page({params}) {
    console.log(params.category, params.snug);
    await params;
    const snug = String(params.snug);
    const category = String(params.category);
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/pages/apis/events/${category}/${snug}`);
    const resData = await res.json();
    if (resData.status === "error") {
        redirect("/error");
    }
    const data = resData.data;
    console.log(data);
    return (
        <div>
            <Hero
                image={data.images?.[0]}
                category={category[0]}
                preTitle={`${
                    category[0] == Categories.TOUR
                        ? `${data.countryName} ${data.duration} Nights `
                        : category[0] == Categories.UMRAH
                        ? `${data.duration} Nights ${data.month} `
                        : ""
                }`}
                middleTitle={`${
                    category[0] == Categories.TOUR
                        ? "Tour Package "
                        : category[0] == Categories.HAJJ
                        ? "Hajj Package "
                        : "Umrah Package "
                }`}
                tagline={
                    category[0] == "H" || category[0] == "U"
                        ? "لَبَّيْكَ اللَّهُمَّ لَبَّيْك"
                        : `EXPLORE ${data.countryName}`
                }
                miniDescription={`${
                    category[0] == Categories.TOUR
                        ? "Tour Package"
                        : category[0] == Categories.HAJJ
                        ? "Hajj Package"
                        : "Umrah Package"
                }`}
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
