import React from 'react';
import Card from './Card';
import umrahGuideInfo from '../_data/umrah-guide-info';

function Info() {
    return (
        <section id='guide' className='flex flex-col gap-20 lg:gap-28 w-full justify-between p-6 lg:p-16'>
            {umrahGuideInfo.map((item, index) => (
                <Card
                    key={index}
                    heading={item.heading}
                    description={item.description}
                    pic={item.pic}
                />
            ))}
        </section>
    );
}

export default Info;
