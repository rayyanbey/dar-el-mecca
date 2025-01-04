import React from "react";

function FacilityCard({component, title, description}) {
    return (
        <div className=" flex justify-center items-center gap-4 my-3">
            {component}
            <div className="w-64 flex flex-col gap-1">
                <h6 className="font-[500] text-[20px]">{title}</h6>
                <p className="font-[300] text-[16px] text-wrap">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default FacilityCard;
