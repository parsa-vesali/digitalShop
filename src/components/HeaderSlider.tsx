"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const images = [
    "/image/slider/1.webp",
    "/image/slider/2.webp",
    "/image/slider/3.webp",
    "/image/slider/4.webp",
];

const HeaderSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative w-full">
            {/* Custom navigation buttons */}
            <button
                ref={prevRef}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800/50 p-2 rounded-full text-white hover:bg-gray-800 transition"
            >
                <ArrowLeft size={24} />
            </button>
            <button
                ref={nextRef}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800/50 p-2 rounded-full text-white hover:bg-gray-800 transition"
            >
                <ArrowRight size={24} />
            </button>

            {/* Slider */}
            <Swiper
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                loop={true}
                onInit={(swiper) => {
                    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }
                }}
                slidesPerView={1}
                className="my-10"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={src}
                            alt={`slider-${index + 1}`}
                            className="w-full h-96 object-cover"
                            width={1000}
                            height={1000}
                            unoptimized
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeaderSlider;
