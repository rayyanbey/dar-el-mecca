import { redirect } from "next/navigation";
import React from "react";
import AllPackages from "../AllPackages";
import BookSeat from "../BookSeat";
import Hero from "../Hero";

async function getData(snug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_NAME}/pages/apis/events/U-packages/${snug}/all`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    
    const resData = await res.json();
    if (resData.status === "error") {
      redirect("/error");
    }
    
    return resData.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    redirect("/error");
  }
}

export  async function Page({ params }) {
  const { category, snug } = params;
  const data = await getData(snug);
  const firstKey = Object.keys(data)[0];
  return (
    <>
      <Hero
        image={data[firstKey]?.[0]?.images?.[0]}
        category={category[0]}
        preTitle={`All ${firstKey} `}
        middleTitle={' Umrah Packages '}
        tagline={"لَبَّيْكَ اللَّهُمَّ لَبَّيْك"}
        miniDescription={"Umrah Packages"}
        scrollId={"all-packages"}
      />
      <AllPackages category={category[0]} data={data} />
      <BookSeat image={data[firstKey]?.[0]?.images?.[0]} />
    </>
  );
}
export default page;
