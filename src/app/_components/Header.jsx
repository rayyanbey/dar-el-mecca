"use client";
import Link from "next/link";
import Image from "next/image";
import BrownButton, {Button} from "./BrownButton";
import DropDown from "../_icons/DropDown";
import {useState} from "react";

export function Header() {
    const [umrahDropDown, setUmrahDropDown] = useState(false);
    const [tourDropDown, setTourDropDown] = useState(false);

    return (
        <nav className="w-full flex justify-center ">
            <div className="flex py-2 items-center gap-28">
                <Link href="/">
                    <Image src="/logo.svg" alt="Dar El Mecca" width={60} height={73.3} quality={100} />
                </Link>
                <div className="flex gap-8 items-center font-[300] text-[16px]">
                    <Link href="/" className="hover:text-secondary hover:underline hover:underline-offset-[5px]">
                        Home
                    </Link>
                    <Link
                        onMouseEnter={() => setUmrahDropDown(true)}
                        onMouseLeave={() => setUmrahDropDown(false)}
                        href="/umrah-packages"
                        className="flex gap-2 items-center relative"
                    >
                        <p className="hover:text-secondary hover:underline hover:underline-offset-[5px]">
                            Umrah Packages
                        </p>
                        <DropDown />
                        {umrahDropDown && (
                            <div className="absolute top-full -left-14 mt-2 w-56 bg-black text-white rounded-lg shadow-lg z-50">
                                <ul className="flex flex-col items-center gap-2 py-4">
                                    <li className="hover:bg-primary" >
                                        <Link href="/umrah-packages/january" className="font-[300] text-[16px]">
                                            January Umrah Package
                                        </Link>
                                    </li>
                                    <div className="w-full h-[1px] bg-[#FFFFFF33]"></div>
                                    <li>
                                        <Link href="/umrah-packages/february" className="  font-[300] text-[16px]">
                                            February Umrah Package
                                        </Link>
                                    </li>
                                    <div className="w-full h-[1px] bg-[#FFFFFF33]"></div>
                                    <li>
                                        <Link href="/umrah-packages/ramadan" className="font-[300] text-[16px]">
                                            Ramadan 2nd Ashra Umrah
                                        </Link>
                                    </li>
                                    <div className="w-full h-[1px] bg-[#FFFFFF33]"></div>
                                    <li>
                                        <Link href="/umrah-packages/all" className="font-[300] text-[16px]">
                                            All Umrah Packages
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </Link>
                    <Link
                        href="/hajj-packages"
                        className="hover:text-secondary hover:underline hover:underline-offset-[5px] "
                    >
                        Hajj Packages (Coming Soon)
                    </Link>
                    <Link href="/tours" className="flex gap-2 items-center">
                        <p className="hover:text-secondary hover:underline hover:underline-offset-[5px]">
                            Tours & Packages
                        </p>
                        <DropDown />
                    </Link>
                    <Link
                        href="/resources"
                        className="hover:text-secondary hover:underline hover:underline-offset-[5px]"
                    >
                        Hajj and Umrah Guides
                    </Link>
                </div>
                <BrownButton text="Contact Us" onClick={() => {}} />
            </div>
        </nav>
    );
}
