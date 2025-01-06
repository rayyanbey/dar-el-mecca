"use client";
import Link from "next/link";
import Image from "next/image";
import BrownButton, { Button } from "./BrownButton";
import DropDown from "../_icons/DropDown";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Menu from "../_icons/Menu";
import Cross from "../_icons/Cross";

export function Header() {
  const pathname = usePathname();
  const [umrahPackages, setUmrahPackages] = useState([
    { name: "January Umrah Package", link: "/umrah-packages/january-umrah" },
    { name: "February Umrah Package", link: "/umrah-packages/february-umrah" },
    { name: "Ramadan 2nd Ashra Umrah", link: "/umrah-packages/ramadan-2nd-ashra-umrah" },
    { name: "All Umrah Packages", link: "/umrah-packages/all-umrah-packages" },
  ]);

  const [tourPackages, setTourPackages] = useState([
    { name: "Turkey Tour Package", link: "/tour-packages/turkey/" },
    { name: "Egypt Tour Land Package", link: "/tour-packages/egypt/" },
    { name: "Dubai Tour Land Package", link: "/tour-packages/dubai/" },
    { name: "Jordan Amman Land Package", link: "/tour-packages/jordan-amman/" },
    { name: "All World Tour Packages", link: "/tour-packages/all/" },
  ]);

  const [umrahDropDown, setUmrahDropDown] = useState(false);
  const [tourDropDown, setTourDropDown] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      {/* For Mobile */}
      <nav className="w-full px-10 flex lg:hidden py-1 justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Dar El Mecca" width={60} height={73.3} quality={100} />
        </Link>
        <div onClick={() => setIsNavOpen(true)}>
          <Menu />
        </div>
      </nav>

      {isNavOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="w-3/4 h-full bg-white z-50 flex flex-col">
            {/* Close Button */}
            <div className="p-4 flex justify-end" onClick={() => setIsNavOpen(false)}>
              <Cross />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-start p-6 space-y-4">
              <Link
                href="/"
                className={`text-lg font-medium ${
                  pathname === "/" ? "text-secondary" : "text-gray-800"
                }`}
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </Link>

              {/* Umrah Packages */}
              <div className="w-full">
                <button
                  onClick={() => setUmrahDropDown((prev) => !prev)}
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-800"
                >
                  Umrah Packages
                  <DropDown />
                </button>
                {umrahDropDown && (
                  <div className="mt-2 space-y-2">
                    {umrahPackages.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="block text-gray-700 hover:text-secondary"
                        onClick={() => setIsNavOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Tour Packages */}
              <div className="w-full">
                <button
                  onClick={() => setTourDropDown((prev) => !prev)}
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-800"
                >
                  Tour & Packages
                  <DropDown />
                </button>
                {tourDropDown && (
                  <div className="mt-2 space-y-2">
                    {tourPackages.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="block text-gray-700 hover:text-secondary"
                        onClick={() => setIsNavOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/hajj-packages"
                className="text-lg font-medium text-gray-800 hover:text-secondary"
                onClick={() => setIsNavOpen(false)}
              >
                Hajj Packages (Coming Soon)
              </Link>

              <Link
                href="/hajj-and-umrah-guides"
                className={`text-lg font-medium ${
                  pathname === "/hajj-and-umrah-guides"
                    ? "text-secondary"
                    : "text-gray-800 hover:text-secondary"
                }`}
                onClick={() => setIsNavOpen(false)}
              >
                Hajj and Umrah Guides
              </Link>

              <BrownButton text="Contact Us" onClick={() => setIsNavOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* For Desktop */}
      <nav className="w-full px-20 hidden lg:flex py-1 justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Dar El Mecca" width={60} height={73.3} quality={100} />
        </Link>
        <div className="flex gap-6 pl-12 items-center font-[300] text-[16px]">
          <Link
            href="/"
            className={`hover:text-secondary ${
              pathname === "/" ? "text-secondary underline underline-offset-[5px] font-[500]" : ""
            } hover:underline hover:underline-offset-[5px]`}
          >
            Home
          </Link>

          {/* Umrah Packages */}
          <p onMouseEnter={() => setUmrahDropDown(true)} className="flex gap-2 items-center relative">
            <span
              className={`hover:text-secondary ${
                pathname.includes("umrah-packages")
                  ? "text-secondary font-[500] underline underline-offset-[5px]"
                  : ""
              } hover:underline hover:underline-offset-[5px]`}
            >
              Umrah Packages
            </span>
            <DropDown />
            {umrahDropDown && (
              <div
                onMouseLeave={() => setUmrahDropDown(false)}
                className="absolute top-full -left-14 mt-2 w-56 bg-black text-white rounded-lg shadow-lg z-50"
              >
                <ul className="flex flex-col">
                  {umrahPackages.map((item, index) => (
                    <div key={index}>
                      <li
                        className={`w-full flex flex-col justify-center items-center hover:bg-primary ${
                          index === 0
                            ? "hover:rounded-t-lg"
                            : index === umrahPackages.length - 1
                            ? "hover:rounded-b-lg"
                            : ""
                        } py-2`}
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
            className="hover:text-secondary hover:underline hover:underline-offset-[5px]"
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
                <ul className="flex flex-col">
                  {tourPackages.map((item, index) => (
                    <div key={index}>
                      <li
                        className={`w-full flex flex-col justify-center items-center hover:bg-primary ${
                          index === 0
                            ? "hover:rounded-t-lg"
                            : index === tourPackages.length - 1
                            ? "hover:rounded-b-lg"
                            : ""
                        } py-2`}
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
            className={`hover:text-secondary ${
              pathname === "/hajj-and-umrah-guides"
                ? "text-secondary underline underline-offset-[5px] font-[500]"
                : ""
            } hover:underline hover:underline-offset-[5px]`}
          >
            Hajj and Umrah Guides
          </Link>
        </div>
        <Link href="/contact">
        <BrownButton text="Contact Us" onClick={() => {}} />
        </Link>
      </nav>
    </div>
  );
}
