import React from 'react'
import Caution from '../_icons/Caution'

function ImpNote() {
    return (
        <section className='bg-[#f0eae1] flex flex-col p-6 lg:p-20 gap-8'>
            <div className='flex items-center justify-center gap-1 lg:gap-4'>
            <h4 className='cinzel-title font-[700] text-[20px] lg:text-[24px]'>Important note</h4>
            <Caution />
            </div>
            <p className='text-[18px] font-[300] '>Umrah pilgrims should avoid any conduct that harms others in the Haram, such as jostling, entering crowded places, and reversing the direction of circumambulation. They shall carefully follow the instructions of observers and security personnel.</p>
        </section>
    )
}

export default ImpNote