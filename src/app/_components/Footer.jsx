import Link from "next/link";
import Image from "next/image";
import Message from "../_icons/Message";
import Phone from "../_icons/Phone";
import Whatsapp from "../_icons/Whatsapp";
import Facebook from "../_icons/Facebook";
import Instagram from "../_icons/Instagram";
import Globe from "../_icons/Globe";

export async function Footer() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/pages/apis/company/getBusinessHours`);
    const resData = await res.json();
    if (resData.status === "error") {
        redirect("/error");
    }
    const data = resData.data;
    console.log(data)
    return (
        <footer className="bg-secondary pt-20  text-[16px] font-[400] text-[#FFFFFFCC]">
            <div className="flex flex-col gap-10 lg:flex-row">
                <div className="flex w-full lg:w-1/4 flex-col gap-2  justify-center items-center ">
                    <Image
                        src="/white-logo.svg"
                        alt="Dar El Mecca"
                        width={120}
                        height={80}
                        className="object-contain"
                    />
                    <div className="flex justify-center gap-4">
                        <Link href="https://www.facebook.com/DarElMecca" className="hover:opacity-80">
                            <Facebook />
                        </Link>
                        <Link href="https://www.instagram.com/darelmecca" className="hover:opacity-80">
                            <Instagram />
                        </Link>
                        <Link href="https://darelmecca.com/" className="hover:opacity-80">
                            <Globe />
                        </Link>
                    </div>
                    <p className="text-center">Follow Us</p>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start w-full lg:w-3/4 gap-16">
                    <div className="flex flex-col items-center lg:items-start gap-2">
                        <h3 className="font-[700] text-[18px] mb-4 text-white">OUR BEST PACKAGES</h3>
                        <ul className="flex flex-col items-center lg:items-start gap-4">
                            <li>
                                <Link href="/U-packages/all" className="hover:underline">
                                    Umrah Packages {new Date(Date.now()).getFullYear()}
                                </Link>
                            </li>
                            <li>
                                <Link href="/H-packages/all" className="hover:underline">
                                    Hajj Packages {new Date(Date.now()).getFullYear()}
                                </Link>
                            </li>
                            <li>
                                <Link href="/T-packages/all" className="hover:underline">
                                    Tours & Packages
                                </Link>
                            </li>
                            <li>
                                <Link href="/U-packages/all" className="hover:underline">
                                    Reserve Your Spot Here
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center lg:items-start  gap-2">
                        <h3 className="font-[700] text-[18px] mb-4 text-white">INFORMATION</h3>
                        <ul className="flex flex-col items-center lg:items-start gap-4">
                            <li>
                                <Link href="/faqs" className="hover:underline">
                                    FAQS
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" className="hover:underline">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/forms-resources" className="hover:underline">
                                    Forms & Resources
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-2">
                        <h3 className="font-[700] text-[18px] mb-4 text-white">BUSINESS HOURS</h3>
                        <ul className="flex flex-col items-center lg:items-start gap-4">
                            {data.map((day, index) => (
                                <div key={index}>
                                    <li  >{day.days}</li>
                                    <li  >{day.schedule}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-2">
                        <h3 className="font-[700] text-[18px] mb-4 text-white">CONTACT US</h3>
                        <ul className="flex flex-col items-center lg:items-start gap-4">
                            <p className="text-sm">4801 GLENWOOD AVENUE</p>
                            <p className="text-sm">SUITE # 200 RALEIGH,</p>
                            <p className="text-sm">NORTH CAROLINA, 27612,</p>
                            <p className="text-sm">UNITED STATES OF AMERICA</p>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#FFFFFF1A] w-full flex flex-wrap justify-center items-center gap-8 py-2 mt-10 text-[14px] font-[600]  ">
                <a href="mailto:info@darelmecca.com" className="flex items-center gap-2">
                    <Message />
                    Email: info@darelmecca.com
                </a>
                <a href="mailto:darelmecca94@gmail.com" className="flex items-center gap-2">
                    <Message />
                    Email: darelmecca94@gmail.com
                </a>
                <a href="tel:1-919-426-2061" className="flex items-center gap-2">
                    <Phone />
                    Call: 1-919-426-2061
                </a>
                <a href="tel:1-919-410-9557" className="flex items-center gap-2">
                    <Phone />
                    Call: 1-919-410-9557
                </a>
                <a href="https://wa.me/19843893054" className="flex items-center gap-2">
                    <Whatsapp />
                    Whatsapp: 1-984-389-3054
                </a>
            </div>
        </footer>
    );
}
