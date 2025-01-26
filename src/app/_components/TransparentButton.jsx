"use client";
import React from "react";

function TransparentButton({text, onClick}) {
    const handleWhatsapp = () => {
        window.open("https://wa.me/19843893054", "_blank");
    }
    return (
        <button onClick={handleWhatsapp}  className="font-[500] text-[16px] bg-transparent  px-5 py-2 rounded-3xl border-[1px] border-secondary  hover:bg-black hover:text-white hover:border-black transition ease-out duration-500 transform hover:scale-105">
            {text}
        </button>
    );
}

export default TransparentButton;
