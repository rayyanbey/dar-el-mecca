"use client";
import Link from "next/link";
import Image from "next/image";
import BrownButton, {Button} from "./BrownButton";
import DropDown from "../_icons/DropDown";
import {useState} from "react";
import { usePathname } from "next/navigation";
export function Header() {
    const pathname = usePathname();
    const [umrahPackages, setUmrahPackages] = useState([
        {
            name: "January Umrah Package",
            link: "/umrah-packages/january-umrah",
        },
        {
            name: "February Umrah Package",
            link: "/umrah-packages/february-umrah",
        },
        {
            name: "Ramadan 2nd Ashra Umrah",
            link: "/umrah-packages/ramadan-2nd-ashra-umrah",
        },
        {
            name: "All Umrah Packages",
            link: "/umrah-packages/all-umrah-packages",
        },
    ]);
    const [tourPackages, settourPackages] = useState([
        {
            name: "Turkey Tour Package",
            link: "/tour-packages/turkey/",
        },
        {
            name: "Egypt Tour Land Package",
            link: "/tour-packages/egypt/",
        },
        {
            name: "Dubai Tour Land Package",
            link: "/tour-packages/dubai/",
        },
        {
            name: "Jordan Amman Land Package",
            link: "/tour-packages/jordan-amman/",
        },
        {
            name: "All World Tour Packages",
            link: "/tour-packages/all/",
        },
    ]);

    const [umrahDropDown, setUmrahDropDown] = useState(false);
    const [tourDropDown, setTourDropDown] = useState(false);

    return (
        <nav className="w-full flex justify-center ">
            <div className="flex py-2 items-center gap-28">
                <Link href="/">
                    <Image src="/logo.svg" alt="Dar El Mecca" width={60} height={73.3} quality={100} />
                </Link>
                <div className="flex gap-8 items-center font-[300] text-[16px]">
                    <Link href="/" className={`hover:text-secondary ${pathname === "/" ? "text-secondary underline underline-offset-[5px] " : ""} hover:underline hover:underline-offset-[5px]`}>
                        Home
                    </Link>
                    <p onMouseEnter={() => setUmrahDropDown(true)} className="flex gap-2 items-center relative">
                        <span className={`hover:text-secondary ${pathname.includes("umrah-packages") || pathname === "/umrah-packages" ? "text-secondary underline underline-offset-[5px] " : ""}  hover:underline hover:underline-offset-[5px]`}>
                            Umrah Packages
                        </span>
                        <DropDown />
                        {umrahDropDown && (
                            <div
                                onMouseLeave={() => setUmrahDropDown(false)}
                                className="absolute top-full -left-14 mt-2 w-56 bg-black text-white rounded-lg shadow-lg z-50"
                            >
                                <ul className="flex flex-col ">
                                    {umrahPackages.map((item, index) => (
                                        <div>
                                            <li
                                                key={index}
                                                className={`w-full flex flex-col justify-center items-center hover:bg-primary ${
                                                    index == 0
                                                        ? "hover:rounded-t-lg"
                                                        : index == umrahPackages.length - 1
                                                        ? "hover:rounded-b-lg"
                                                        : ""
                                                }  py-2`}
                                            >
                                                <Link href={item.link} className="p-1 font-[300] text-[16px] text-center">
                                                    {item.name}
                                                </Link>
                                            </li>
                                            {index < umrahPackages.length - 1 && (
                                                <div className="w-full h-[1px] bg-[#FFFFFF33]"></div>
                                            )}
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </p>

                    <Link
                        href="/hajj-packages"
                        className="hover:text-secondary hover:underline hover:underline-offset-[5px] "
                    >
                        Hajj Packages (Coming Soon)
                    </Link>
                    <p onMouseEnter={() => setTourDropDown(true)} className="flex gap-2 items-center relative">
                        <span className="hover:text-secondary hover:underline hover:underline-offset-[5px]">
                            Tour & Packages
                        </span>
                        <DropDown />
                        {tourDropDown && (
                            <div
                                onMouseLeave={() => setTourDropDown(false)}
                                className="absolute top-full -left-10 mt-2 w-56 bg-black text-white rounded-lg shadow-lg z-50"
                            >
                                <ul className="flex flex-col ">
                                    {tourPackages.map((item, index) => (
                                        <div>
                                            <li
                                                key={index}
                                                className={`w-full flex flex-col justify-center items-center hover:bg-primary ${
                                                    index == 0
                                                        ? "hover:rounded-t-lg"
                                                        : index == tourPackages.length - 1
                                                        ? "hover:rounded-b-lg"
                                                        : ""
                                                }  py-2`}
                                            >
                                                <Link href={item.link} className="p-1 font-[300] text-[16px] text-center">
                                                    {item.name}
                                                </Link>
                                            </li>
                                            {index < tourPackages.length - 1 && (
                                                <div className="w-full h-[1px] bg-[#FFFFFF33]"></div>
                                            )}
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </p>
                    <Link
                        href="/hajj-and-umrah-guides"
                        className={`hover:text-secondary ${pathname === "/hajj-and-umrah-guides" ? "text-secondary underline underline-offset-[5px] " : ""} hover:underline hover:underline-offset-[5px]`}
                    >
                        Hajj and Umrah Guides
                    </Link>
                </div>
                <BrownButton text="Contact Us" onClick={() => {}} />
            </div>
        </nav>
    );
}
