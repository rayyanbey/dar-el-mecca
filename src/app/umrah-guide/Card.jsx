import React from 'react'

function Card({heading,description,pic}) {
  return (
    <div className='flex flex-col lg:flex-row gap-4 '>
      <div className={`flex flex-col items-center lg:items-start w-full ${pic?'lg:w-[65%]':'w-full'}  gap-4`}>
        <h4 className='cinzel-title text-[24px] font-[700]'>{heading}</h4>
        <div className='text-[18px] flex flex-col font-light '>
          {description.map((item)=>{
            return <p>{item}</p>
          })}
        </div>
      </div>
      {pic&&<div className='flex flex-col gap-10 w-full  lg:w-[35%]'>
        <div className="w-full lg:w-full  flex justify-end">
          <img src={pic} className="rounded-3xl w-full  h-[40vh]  object-cover" alt="" />
        </div>
      </div>}
    </div>

  )
}

export default Card