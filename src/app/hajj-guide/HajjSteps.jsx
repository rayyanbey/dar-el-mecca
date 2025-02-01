import React from 'react';
import hajjSteps from '../_data/hajj-steps-data';
function HajjSteps() {
    return (
        <section className="flex flex-col p-6 lg:p-20">
            <h2 className="text-[24px] text-center my-10 cinzel-title font-[700]">
                Here are the 19 steps of Hajj in detail:
            </h2>
            <div className="flex flex-col gap-6">
                {hajjSteps.map((item, index) => {
                    return (
                        <div className='flex flex-col lg:flex-row gap-4 '>
                            <div className={`flex flex-col items-center lg:items-start w-full ${item.pic ? 'lg:w-[65%]' : 'w-full'}  gap-4`}>
                                <h4 className='cinzel-title text-[24px] font-[700]'>{item.title}</h4>
                                <div className='text-[18px] flex flex-col font-light '>
                                    {item.description.map((desc, descIndex) =>
                                        desc.split('\n').map((line, lineIndex) => (
                                            <p key={`${descIndex}-${lineIndex}`} className={`font-[300] ${desc.includes('\n') ? '' : 'my-3'}  text-[18px]`}>
                                                {line}
                                            </p>
                                        ))
                                    )}
                                </div>
                            </div>
                            {item.pic && <div className='flex flex-col gap-10 w-full  lg:w-[35%]'>
                                <div className="w-full lg:w-full  flex justify-end">
                                    <img src={item.pic} className="rounded-3xl w-full  h-[40vh]  object-cover" alt="" />
                                </div>
                            </div>}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
export default HajjSteps;