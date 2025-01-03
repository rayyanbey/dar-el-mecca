import Image from "next/image";
import AllTourDetailButton from "./AllTourDetailButton";

export function Hero() {
    return (
        <section
            style={{
                backgroundImage: "url('/images/hero-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="w-full flex flex-col items-center  lg:flex-row "
        >
            <div className="flex flex-col w-full lg:w-[60%] p-24 gap-8 justify-center ">
                <div className="cinzel-title text-5xl leading-snug">
                    <h1>
                        Explore The <span className="text-secondary">Umrah </span> and{" "}
                        <span className="text-secondary">Hajj</span> Packages From USA 2024
                    </h1>
                </div>
                <h4 className="text-[18px] font-[300] leading-tight">
                    A prominent pioneer in crafting A-grade Umrah Experiences, Nurturing Faith, and Guiding Pilgrims in
                    the USA. Since its inception, the organization has consistently expanded its reach
                </h4>

                <div className="flex items-center gap-2">
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="w-[40px] h-[40px] rounded-full border-2 border-secondary overflow-hidden"
                            >
                                <Image
                                    src={"/test.jpg?height=48&width=48"}
                                    alt="Pilgrim"
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="font-[300] text-[16px]">
                        <p>More Than</p>
                        <p className="text-secondary font-[600]">3425 Pilgrims</p>
                    </div>
                </div>
                <AllTourDetailButton />
            </div>

            <div className="w-full lg:w-[40%] h-[60vh] md:h-[105vh] flex flex-col items-center lg:justify-center">
              <div className="bg-transparent border-[1px]  border-[#caa46fad] border-dashed  w-[70%] h-[80%] flex items-end rounded-t-full">
                <div className="relative bg-secondary w-full h-[90%] rounded-t-full">
                  <p className="absolute -top-6 left-[30%]  z-20 py-3 px-4 font-[400] text-[22px] text-white rounded-lg bg-secondary KFG-title">لَبَّيْكَ اللَّهُمَّ لَبَّيْك</p>
                    <img
                        className="rounded-t-full absolute left-2 -top-2 w-[98%] h-[100%]  object-cover"
                        src={"/images/hero-main.jpeg"}
                        alt="Hero Main"
                    />
                </div>
                </div>
            </div>
        </section>
        // <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        //   <Image
        //     src="/big-bg.svg"
        //     alt="Hero Background"
        //     fill
        //     priority
        //     className="object-cover object-center"
        //     sizes="100vw"
        //   />
        //   {/* Overlay */}
        //   <div className="absolute inset-0 bg-[#d2cbc289] bg-opacity-50" />

        //   <div className="container mx-auto grid md:grid-cols-2 gap-12 py-12 relative z-10">
        //     <motion.div
        //       initial={{ opacity: 0, x: -50 }}
        //       animate={{ opacity: 1, x: 0 }}
        //       transition={{ duration: 0.5 }}
        //       className="space-y-6 text-white"
        //     >
        //       <h1 className="text-5xl font-bold leading-tight">
        //         EXPLORE THE <span className="text-[#987547]">UMRAH</span> AND{" "}
        //         <span className="text-[#987547]">HAJJ</span> PACKAGES FROM USA 2024
        //       </h1>
        //       <p className="text-gray-200 text-lg">
        //         A prominent pioneer in crafting A-grade Umrah Experiences, Nurturing Faith,
        //         and Guiding Pilgrims in the USA. Since its inception, the organization has
        //         consistently expanded its reach
        //       </p>
        //       <div className="flex items-center gap-4">
        //         <div className="flex -space-x-4">
        //           {[1,2,3,4].map((i) => (
        //             <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
        //               <Image
        //                 src={`/placeholder.svg?height=48&width=48`}
        //                 alt="Pilgrim"
        //                 width={48}
        //                 height={48}
        //                 className="object-cover"
        //               />
        //             </div>
        //           ))}
        //         </div>
        //         <div>
        //           <p className="font-semibold">More Than</p>
        //           <p className="text-[#987547]">3425 Pilgrims</p>
        //         </div>
        //       </div>
        //       <BrownButton className="bg-[#987547] hover:bg-[#876436] text-lg px-8">
        //         All Tour details
        //       </BrownButton>
        //     </motion.div>
        //     <motion.div
        //       initial={{ opacity: 0, scale: 0.8 }}
        //       animate={{ opacity: 1, scale: 1 }}
        //       transition={{ duration: 0.5 }}
        //     >
        //       <CurvedCard
        //         image="/curved-card.svg?height=400&width=600"
        //         imageAlt="Kaaba"
        //         className="w-full"
        //       >
        //         <div className="absolute top-4 right-4 bg-[#987547] text-white px-4 py-2 rounded-lg">
        //           لَبَّيْكَ اللَّهُمَّ لَبَّيْك
        //         </div>
        //       </CurvedCard>
        //     </motion.div>
        //   </div>
        // </section>
    );
}
