import React from 'react'
import BrownButton from '../_components/BrownButton'
import Card from './Card'

function RamadanInfo() {
  return (
    <section className='bg-[#f0eae1] flex flex-col   gap-20 w-full  justify-between p-6 lg:p-16'>

      <Card
        key={10}
        heading={"Performing Umrah in Ramadan"}
        description={["Umrah has great virtues at all times. It is one of the deeds that expiate sins, for the Prophet (blessings and peace be upon him) said. Additionally, it has a special virtue during Ramadan."]}
        pic={"./images/umrah-guide/ramdan-mubarak.jpeg"}
      />

      <div>
        <div className='flex flex-col  w-full  gap-4'>
          <h4 className='cinzel-title text-[24px] font-[700]'>Reward for performing Umrah in Ramadan</h4>
          <div className='text-[18px] tracking-tight font-light flex flex-col gap-4 '>
            <p>
              The Prophet blessings and peace be upon him said: "Performance of Umrah in Ramadan is equivalent to Hajj", or he said: "Equal to performance of Hajj with me"
            </p>
            <p>
              This virtue extends to all the days and nights of Ramadan
            </p>
            <p>
              You can Book Umrah in Ramadan with Dar El Mecca Travel from all over the USA. Click the button below.</p>
          </div>
          <div className='flex w-full my-4 justify-center'>
            <BrownButton text={"Begin your Umrah journey"} />
          </div>
        </div>
      </div>



    </section>
  )
}

export default RamadanInfo