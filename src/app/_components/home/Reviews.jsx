"use client";
import Star from "../../_icons/Star";
import Arrow from "../../_icons/Arrow";
import BrownStars5 from "../../_icons/BrownStars5";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import {useEffect, useRef, useState} from "react";
import { getReviewsAPI } from "../../_apis/reviews.api";
import { redirect } from "next/dist/server/api-utils";
export function Reviews() {
    const [reviews,setReviews]=useState([]); 
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const nextReview = () => {
        if (swiperRef.current) swiperRef.current.swiper.slideNext();
    };

    const prevReview = () => {
        if (swiperRef.current) swiperRef.current.swiper.slidePrev();
    };
    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    const getReviews=async()=>{
        const res=await getReviewsAPI();
        if(res.message=="error"){
            redirect('/error');
        }
        setReviews(res);
    }

    useEffect(()=>{
        getReviews();
    },[]);

    return (
        <section className="w-full flex flex-col gap-8 py-16 bg-white">
            <div className="flex flex-col gap-2">
                <div className="flex justify-center">
                    <BrownStars5 />
                </div>
                <h2 className="text-[32px] text-center cinzel-title font-[700] ">Our Customer Reviews</h2>
                <p className="text-[18px] text-center font-[300]">
                    We provide High quality travel services, that is why we are loved by our clients. We have 4.9 star
                    rating on Google.
                </p>
            </div>
            <div className="flex justify-center py-10">
                <Swiper
                    centeredSlides={true}
                    slidesPerView={1}
                    spaceBetween={20}
                    effect={"coverflow"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 90,
                        },
                    }}
                    className="w-full"
                    onSlideChange={handleSlideChange} // Track slide change event
                    ref={swiperRef}
                >
                    { reviews.map((review, i) => (
                        <SwiperSlide
                            key={i}
                            style={{
                                scale: activeIndex === i ? 1 : 0.8, // Set background color for active slide
                            }}
                        >
                            <ReviewCard
                                backgroundColor={activeIndex === i ? "#A8854E1A" : "transparent"}
                                name={review.name}
                                role={review.profession}
                                image={review.image}
                                content={review.review}
                                stars={review.rating}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="flex items-center justify-between w-1/2 lg:w-[12%] mx-auto">
                <button
                    className="rotate-180 bg-primary h-10 w-10 flex justify-center items-center rounded-full"
                    onClick={prevReview}
                >
                    <Arrow />
                </button>
                <p className="text-[#00000066] text-[20px]">- - -</p>
                <button
                    className="bg-primary h-10 w-10 flex justify-center items-center rounded-full"
                    onClick={nextReview}
                >
                    <Arrow />
                </button>
            </div>
        </section>
    );
}

function ReviewCard({ name, role, image, content, backgroundColor,stars }) {
        const [isLargeScreen, setIsLargeScreen] = useState(false); // Initialize with a default value
    
        useEffect(() => {
            if (typeof window !== "undefined") {
                const updateScreenSize = () => {
                    setIsLargeScreen(window.innerWidth >= 640);
                };
    
                // Set initial value
                updateScreenSize();
    
                // Add resize event listener
                window.addEventListener("resize", updateScreenSize);
    
                // Cleanup event listener on unmount
                return () => window.removeEventListener("resize", updateScreenSize);
            }
        }, []);
    
        return (
            <div
                className={`cursor-grab flex w-[300px] md:w-[50vw] ${
                    backgroundColor === "#A8854E1A" && "bg-[#A8854E1A]"
                } gap-2 lg:gap-8 p-4 m-4 lg:px-6 lg:py-8 border-2 border-[#00000014]`}
            >
                <div className="w-[35%] flex flex-col gap-4 items-center p-2 lg:p-4 bg-secondary rounded-t-full">
                    <img src={image} className="object-cover rounded-full w-14 h-14 md:w-24 md:h-24 lg:w-32 lg:h-32"/>
                    <div className="flex bg-[#FFFFFF33] rounded-full px-2 lg:p-2 m-2">
                        {Array.from({ length: stars }).map((i) => (
                            <Star color="#fff" width={isLargeScreen ? 21 : 10} height={21} key={i} />
                        ))}
                    </div>
                </div>
                <div className="w-3/4 flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2">
                        <h6 className="text-[14px] lg:text-[20px] cinzel-title font-[700]">{name}</h6>
                        <p className="text-[10px] lg:text-[14px] font-[400]">{role}</p>
                    </div>
                    <p className="text-[10px] lg:text-[18px] font-[400] opacity-80 text-wrap">{content}</p>
                </div>
            </div>
        );
}
    

export default Reviews;
