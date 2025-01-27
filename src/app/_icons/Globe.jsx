import React from "react";

function Globe() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Circular background */}
            <rect width="35" height="35" rx="17.5" fill="white" fillOpacity="0.15" />
            {/* Globe icon */}
            <circle cx="18" cy="18" r="8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M18 6a12 12 0 0 0 0 24 12 12 0 0 0 0-24"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6 18h24"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Globe;