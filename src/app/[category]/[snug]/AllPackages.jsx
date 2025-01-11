import React from "react";
import PackageCard from "../../_components/PackageCard";

function AllPackages({data}) {
    return (
        <section className="w-full flex flex-col justify-center items-center px-2 lg:px-0 py-6 lg:py-16 gap-8">
            <h4 className="cinzel-title text-[32px] font-[700] text-wrap">All Packages</h4>
            <div className="flex flex-wrap gap-6 px-2 lg:px-0 justify-center items-center">
                {data.map((item) => (
                <PackageCard key={item.id} title={item.title} duration={item.duration} pricing={item.pricing} type={item.type}/>
                ))}
            </div>
        </section>
    );
}

export default AllPackages;
