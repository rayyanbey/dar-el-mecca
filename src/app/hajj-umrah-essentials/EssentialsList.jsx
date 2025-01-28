import React from 'react'
import essenntials from '../_data/hajj-umrah-essentials'
import EssentialCard from './EssentialCard'

function EssentialsList() {
    return (
        <section className="w-full flex flex-col gap-10 lg:gap-0 lg:flex-row bg-[#F6F3ED] p-6 lg:p-20">
            <div className="flex flex-col w-full lg:w-[65%]  items-start  justify-center gap-8 ">
                <h3 className="font-[700]  text-[32px] cinzel-title">
                    Hajj and Umrah Essentials
                </h3>
                <div className="font-[300] text-[20px] flex flex-col">
                    <h2 className="">While Going for Umrah keep all these essential Items with you for a worry-free Umrah Experience:
                    </h2>
                    <p>List of basic items:</p>
                </div>
                <div className=" w-full flex flex-col lg:flex-row gap-y-4 flex-wrap  lg:justify-between ">
                    {essenntials.map((facility) => (
                        <EssentialCard
                            key={facility.title}
                            component={facility.component}
                            title={facility.title}
                        />
                    ))}
                </div>
            </div>
            <div className="flex w-full lg:w-[35%] h-[90vh] lg:h-[100vh] justify-end  items-center">
                <div className="relative bg-secondary w-[90%] h-full lg:h-3/4 rounded-t-full">
                    <img
                        className="rounded-t-full absolute left-2 -top-2 w-[97.2%] lg:w-[98%] h-[100%]  object-cover"
                        src={"/images/Essentials.jpeg"}
                        alt="Hero Main"
                    />
                </div>
            </div>
        </section>
    )
}

export default EssentialsList