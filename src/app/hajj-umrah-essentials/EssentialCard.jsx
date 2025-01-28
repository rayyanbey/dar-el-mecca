import React from "react";

function EssentialCard({ component, title }) {
    return (
        <div className=" flex w-full lg:w-[30%] gap-4  ">
            <div className="w-10">
                {component}
            </div>
            <h6 className="font-[400] text-wrap text-[18px]">{title}</h6>
        </div>
    );
}

export default EssentialCard;
