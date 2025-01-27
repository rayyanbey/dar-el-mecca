import { redirect } from "next/navigation";
import PackageCard from "../PackageCard";
import AllPackages from "../../[category]/[snug]/AllPackages";

const packages = [
    {
        title: "JANUARY UMRAH",
        nights: 8,
        departFrom: "IAD-MED",
        departDate: "18 JAN",
        returnFrom: "JED-IAD",
        returnDate: "27 JAN",
        hotels: ["5 Star Swissotel Makkah", "5 Star Anwar Al Medina Movenpick"],
        image: "/january-umrah.jpg",
    },
    {
        title: "FEBRUARY UMRAH",
        nights: 7,
        departFrom: "IAD-MED",
        departDate: "20 FEB",
        returnFrom: "JED-IAD",
        returnDate: "28 FEB",
        hotels: ["5 Star Swissotel Makkah", "5 Star Anwar Al Medina Movenpick"],
        image: "/february-umrah.jpg",
    },
    {
        title: "RAMADAN UMRAH",
        nights: 8,
        departFrom: "IAD-MED",
        departDate: "07 MAR",
        returnFrom: "JED-IAD",
        returnDate: "16 MAR",
        hotels: ["5 Star Dar Iman Intercontinental Medina", "5 Star Swissotel Makkah"],
        image: "/ramadan-umrah.jpg",
    },
];

export async function UmrahPackages() {
   const res = await fetch(
       `${process.env.NEXT_PUBLIC_HOST_NAME}/pages/apis/events/U-packages/January/all`
     );
     const resData = await res.json();
     if (resData.status === "error") {
       redirect("/error");
     }
     const data = resData.data;
     console.log(data);
    return (
        <section className="w-full flex flex-col justify-center items-center px-2 lg:px-0 py-6 lg:py-16 ">
            <h2 className="text-[32px] text-center cinzel-title font-[700]">Choose Your Umrah Packages 2024 & 2025</h2>
            <p className="text-[18px] text-center font-[300] py-3">
                We provide Best Umrah Packages 2025 From USA for overseas Pakistanis.
            </p> 
            <div className="flex flex-wrap gap-6 px-2 lg:px-0 justify-center items-center">
            {Object.entries(data).map(([key, packages]) => (
                <div className="flex flex-col gap-8 py-4">
                    <div className="flex flex-wrap gap-6 px-2 lg:px-0 justify-center items-center">
                        {packages.map((subItem) => (
                            <PackageCard
                                key={subItem.id}
                                title={subItem.title}
                                duration={subItem.duration}
                                pricing={subItem.pricing}
                                type={subItem.type}
                                id={subItem.id}
                            />
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </section>
    );
}
