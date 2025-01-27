import React from 'react';
import hajjSteps from '../_data/hajj-steps-data';

function HajjSteps() {
    console.log(hajjSteps);

    return (
        <section className="flex flex-col p-6 lg:p-20">
            <h2 className="text-[24px] text-center my-10 cinzel-title font-[700]">
                Here are the 19 steps of Hajj in detail:
            </h2>
            <div className="flex flex-col gap-6">
                {hajjSteps.map((item, index) => {
                    return (
                        <div
                        key={index}
                        className={`flex flex-col }`}
                        >
                            <h6 className="font-[700] text-[24px] cinzel-title">
                                {`${item.title}`}
                            </h6>
                            {item.description.map((desc, descIndex) =>
                                desc.split('\n').map((line, lineIndex) => (
                                    <p key={`${descIndex}-${lineIndex}`} className={`font-[300] ${desc.includes('\n')?'':'my-3'}  text-[18px]`}>
                                        {line}
                                    </p>
                                ))
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default HajjSteps;
