"use client";
import React from "react";

function BrownButton({ text, onClick }) {
  return (
    <button
      className="bg-primary px-6 py-2 rounded-3xl hover:bg-black transition ease-out duration-500 transform hover:scale-105"
      onClick={onClick}
    >
      <p className="text-white font-[500] text-[16px]">{text}</p>
    </button>
  );
}

export default BrownButton;
