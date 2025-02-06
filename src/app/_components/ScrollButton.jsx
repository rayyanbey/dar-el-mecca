'use client';
import React from 'react'

function ScrollButton({text,id,brown=false}) {
    function handleScroll() {
        const targetSection = document.getElementById(id);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <button onClick={handleScroll} className={`font-[500] text-[16px] ${brown?'bg-secondary hover:bg-black text-white':'bg-transparent  border-secondary  hover:bg-black hover:text-white hover:border-black'}  px-5 py-2 rounded-3xl border-[1px] transition ease-out duration-500 transform hover:scale-105`}>
            {text}
        </button>
    )
}

export default ScrollButton