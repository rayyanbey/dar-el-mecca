"use client"
import React from 'react'
function BrownButton({text, onClick}) {
  return (
    <button className='bg-primary  h-10 rounded-3xl' onClick={() => onClick()}>
      <p className='text-white font-[500] px-5 text-[16px]'>{text}</p>
    </button>
  )
}

export default BrownButton