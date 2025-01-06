import React from "react";

function LocationDetail() {
    return (
        <div className="flex flex-col justify-center items-center p-4 lg:px-16 py-6 lg:py-16 gap-4">
            <div>
                <h2 className="text-[28px] lg:text-[32px] text-center cinzel-title font-[700] ">Our location on map</h2>
                <p className="text-[18px] text-center font-[300] py-3">You can find our location from the map below.</p>
            </div>
            <img src="../images/Location.png" alt="" className="w-full h-[60vh] object-cover lg:h-full rounded-xl" />
        </div>
    );
}

export default LocationDetail;
