import React from 'react'

function HajjMethods() {
  return (
    <section className='flex flex-col  lg:flex-row gap-4 w-full  justify-between p-10 lg:px-20'>
      <div className='flex flex-col items-center lg:items-start w-full lg:w-[65%] gap-4'>
        <h4 className='cinzel-title text-[24px] font-[700]'>Method of Performing Hajj</h4>
        <div className='text-[18px] font-light flex  flex-col justify-center lg:justify-start gap-6'>
          <div>
          <p>Hajj involves 19 Main Steps:</p>
          <ol type='1' className='pl-8  list-decimal'>
            <li>Preparation and Intention</li>
            <li>Enter state of Ihram</li>
            <li>Tawaf x7</li>
            <li>Safa and Marwa</li>
            <li>Clip/Shave Hair (Umrah ends)</li>
            <li>Resting and Praying</li>
            <li>Enter state of Ihram</li>
            <li>Arrive at Mina</li>
            <li>Day of 'Arafah</li>
            <li>Muzdalifah (under the night sky)</li>
            <li>Rami (stoning of the devil)</li>
            <li>Hady</li>
            <li>Shaving of the Head</li>
            <li>Tawaf al-Ifadha</li>
            <li>Saai'</li>
            <li>Rami (stoning of the devil)</li>
            <li>Spend night at Mina</li>
            <li>Rami (stoning of the devil)</li>
            <li>Farewell Tawaf al-Wida</li>
          </ol>
          </div>
          <p>There are three forms of Hajj: Tamattu, Ifraad, and Qiran.</p>
          <p className='tracking-tight'>For the purpose of this Hajj guide, we will use the Tamattu form of Hajj, which is what the Prophet Muhammad (peace and blessings be upon him) encouraged the Muslims to perform.</p>
        </div>
      </div>

      <div className='flex flex-col gap-10 w-full  lg:w-[35%]'>
        <div className="w-full lg:w-full  flex justify-end">
          <img src="./images/hajj-method-1.jpeg" className="rounded-3xl w-full  h-[40vh]  object-cover" alt="" />
        </div>
        <div className="w-full lg:w-full  flex justify-end">
          <img src="./images/hajj-service.jpeg" className="rounded-3xl w-full  h-[40vh]  object-cover" alt="" />
        </div>
      </div>
    </section>
  )
}

export default HajjMethods