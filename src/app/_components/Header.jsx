"use client";
import Link from "next/link";
import Image from "next/image";
import BrownButton, { Button } from "./BrownButton";
import DropDown from "../_icons/DropDown";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Menu from "../_icons/Menu";
import Cross from "../_icons/Cross";

export function Header() {
  const pathname = usePathname();
  const [umrahPackages, setUmrahPackages] = useState([]);
  const [tourPackages, setTourPackages] = useState([]);
  const [hajjPackages, setHajjPackages] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [umrahDropDown, setUmrahDropDown] = useState(false);
  const [tourDropDown, setTourDropDown] = useState(false);
  const [hajjDropDown, setHajjDropDown] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    async function getAllTitles() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOST_NAME}/pages/apis/events/allEventsTitles`
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const { data } = await res.json();

        setUmrahPackages(
          data
            .filter((obj) => obj.type === "U")
            .flatMap((obj) =>
              obj.events.map((event) => ({
                name: event.month + " Umrah Packages",
                link: `/${obj.type}-packages/${event.month}/all`,
              }))
            )
            .concat([{ name: "All Umrah Packages", link: "/U-packages/all" }])
        );

        setTourPackages(
          data
            .filter((obj) => obj.type === "T")
            .flatMap((obj) =>
              obj.events.map((event) => ({
                name: event.title,
                link: `/${obj.type}-packages/${event.id}`,
              }))
            )
            .concat([{ name: "All Tour Packages", link: "/T-packages/all" }])
        );

        setHajjPackages( // Set Hajj packages dropdown
          data
            .filter((obj) => obj.type === "H")
            .flatMap((obj) =>
              obj.events.map((event) => ({
                name: event.title,
                link: `/${obj.type}-packages/${event.id}`,
              }))
            )
            .concat([{ name: "All Hajj Packages", link: "/H-packages/all" }])
        );

      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    getAllTitles();
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white">
      {/* For Mobile */}
      <nav className="w-full px-10 flex lg:hidden py-1 justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Dar El Mecca"
            width={60}
            height={73.3}
            quality={100}
          />
        </Link>
        <div onClick={() => setIsNavOpen(true)}>
          <Menu />
        </div>
      </nav>
      {isNavOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="w-3/4 h-full bg-white z-50 flex flex-col">
            <div
              className="p-4 flex justify-end"
              onClick={() => setIsNavOpen(false)}
            >
              <Cross />
            </div>
            {/* Navigation Links */}
            <div className="flex flex-col items-start p-6 space-y-4">
              <Link
                href="/"
                className={`text-lg font-medium ${pathname === "/" ? "text-secondary" : "text-gray-800"
                  }`}
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </Link>
              <MobileDropDown setDropDown={setUmrahDropDown} title={"Umrah Packages"} setIsNavOpen={setIsNavOpen} dropDown={umrahDropDown} data={umrahPackages} />
              <MobileDropDown setDropDown={setHajjDropDown} title={"Hajj Packages"} setIsNavOpen={setIsNavOpen} dropDown={hajjDropDown} data={hajjPackages} />
              <MobileDropDown setDropDown={setTourDropDown} title={"Tour Packages"} setIsNavOpen={setIsNavOpen} dropDown={tourDropDown} data={tourPackages} />
              <Link
                href="/hajj-and-umrah-guides"
                className={`text-lg font-medium ${pathname === "/hajj-and-umrah-guides"
                  ? "text-secondary"
                  : "text-gray-800 hover:text-secondary"
                  }`}
                onClick={() => setIsNavOpen(false)}
              >
                Hajj and Umrah Guides
              </Link>

              <Link href="/contact">
                <BrownButton text="Contact Us" onClick={() => { }} />
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* For Desktop */}
      <nav
        className={`w-full px-20 hidden lg:flex py-1 justify-between items-center bg-white transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""
          }`}
      >
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Dar El Mecca"
            width={60}
            height={73.3}
            quality={100}
          />
        </Link>
        <div className="flex gap-6 pl-12 items-center font-[300] text-[16px]">
          <Link
            href="/"
            className={`hover:text-secondary ${pathname === "/"
              ? "text-secondary underline underline-offset-[5px] font-[500]"
              : ""
              } hover:underline hover:underline-offset-[5px]`}
          >
            Home
          </Link>
          <DesktopDropDown data={umrahPackages} setDropDown={setUmrahDropDown} pathname={pathname} title={"Umrah Packages"} dropDown={umrahDropDown} />
          <DesktopDropDown data={hajjPackages} setDropDown={setHajjDropDown} pathname={pathname} title={"Hajj Packages"} dropDown={hajjDropDown} />
          <DesktopDropDown data={tourPackages} setDropDown={setTourDropDown} pathname={pathname} title={"Tour Packages"} dropDown={tourDropDown} />
          <Link
            href="/hajj-and-umrah-guides"
            className={`hover:text-secondary ${pathname === "/hajj-and-umrah-guides"
              ? "text-secondary underline underline-offset-[5px] font-[500]"
              : ""
              } hover:underline hover:underline-offset-[5px]`}
          >
            Hajj and Umrah Guides
          </Link>
        </div>
        <Link href="/contact">
          <BrownButton text="Contact Us" onClick={() => { }} />
        </Link>
      </nav>
    </div>
  );
}

function MobileDropDown({ setDropDown, dropDown, title, data, setIsNavOpen }) {
  return (
    <div className="w-full">
      <button
        onClick={() => setDropDown((prev) => !prev)}
        className="flex items-center justify-between w-full text-lg font-medium text-gray-800"
      >
        {title}
        <DropDown />
      </button>
      {dropDown && (
        <div className="mt-2 space-y-2">
          {data.map((item, index) => (
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
  )
}

function DesktopDropDown({ setDropDown, dropDown, pathname, title, data }) {
  return (
    <div
      onMouseEnter={() => setDropDown(true)}
      className="flex gap-2 items-center relative"
    >
      <span
        className={`hover:text-secondary ${pathname.includes(title.toLowerCase().replace(" ", "-"))
          ? "text-secondary font-[500] underline underline-offset-[5px]"
          : ""
          } hover:underline hover:underline-offset-[5px]`}
      >
        {title}
      </span>
      <DropDown />
      {dropDown && (
        <div
          onMouseLeave={() => setDropDown(false)}
          className="absolute top-full -left-14 mt-2 w-56 bg-black text-white rounded-lg shadow-lg z-50"
        >
          <ul className="flex flex-col">
            {data?.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.link}
                  className={`w-full flex flex-col justify-center items-center hover:bg-primary ${data.length == 1 ? "hover:rounded-t-lg hover:rounded-b-lg" : index === 0
                    ? "hover:rounded-t-lg"
                    : index === data.length - 1
                      ? "hover:rounded-b-lg"
                      : ""
                    } py-2`}
                >
                  <p
                    className="p-1 font-[300] text-[16px] text-center"
                  >
                    {item.name}
                  </p>
                </Link>
                {index < data.length - 1 && (
                  <div className="w-full h-[1px] bg-[#FFFFFF33]"></div>
                )}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>

  )
}