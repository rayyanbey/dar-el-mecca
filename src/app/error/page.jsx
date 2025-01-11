"use client";

import {redirect} from "next/navigation";
import TransparentButton from "../_components/TransparentButton";

export default function ErrorPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
            <p className="text-lg mt-2 text-gray-600 text-center my-4">
                The page you are looking for doesn’t exist or has been moved.
            </p>
            <TransparentButton onClick={() => redirect("/")} text={"Go Back Home"} />
        </div>
    );
}
