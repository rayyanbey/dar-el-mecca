import React from "react";
import PackageCard from "../../_components/PackageCard";
import Categories from "../../_enums/packagesCategories";

function AllPackages({ data, category }) {
    return (
        <section className="w-full flex flex-col justify-center items-center px-2 lg:px-0 py-6 lg:py-16 gap-8">
            {Object.entries(data).map(([key, packages]) => (
                <div className="flex flex-col gap-8 py-4">
                    <h4 className=" text-center cinzel-title text-[32px] font-[700] text-wrap">
                        All{" "}
                        {category === Categories.TOUR
                            ? "Tour"
                            : category === Categories.HAJJ
                            ? "Hajj"
                            : key}
                        {new Date().getFullYear()} Packages
                    </h4>
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
        </section>
    );
}

export default AllPackages;
