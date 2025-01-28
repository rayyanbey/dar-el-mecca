import { redirect } from "next/navigation";
import React from "react";
import AllPackages from "../AllPackages";
import BookSeat from "../BookSeat";
import Hero from "../Hero";
async function page({ params }) {
  await params;
  const category = String(params.category);
  const snug = String(params.snug);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_NAME}/pages/apis/events/U-packages/${snug}/all`
  );
  const resData = await res.json();
  if (resData.status === "error") {
    redirect("/error");
  }
  const data = resData.data;
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
      />
      <AllPackages category={category[0]} data={data} />
      <BookSeat image={data[firstKey]?.[0]?.images?.[0]} />
    </>
  );
}
export default page;
