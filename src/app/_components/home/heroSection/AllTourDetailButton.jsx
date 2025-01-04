"use client"
import React from 'react'
import TransparentButton from '../../TransparentButton'

export default function AllTourDetailButton() {
    const handleButtonClick = () => {
        console.log("Button clicked!");
      };
  return (
    <div className=''>
    <TransparentButton text="All Tour details" onClick={handleButtonClick}/>
    </div>
  )
}
