import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation , Autoplay} from "swiper";
import banner1 from "/public/banner/banner-1.jpg"
import banner2 from "/public/banner/banner-2.jpg"
import banner3 from "/public/banner/banner-3.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SingleBanner from './SingleBanner';

const Banner = () => {
    const banners = [
        {
            id: 1,
            photo: banner1
        },
        {
            id: 2,
            photo: banner2
        },
        {
            id: 3,
            photo: banner3
        }
    ];

    return (
        <div>
        <Swiper
            loop={true}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
            

        >
            {banners.map((banner) => (
                <SwiperSlide key={banner.id}>
                    <SingleBanner key={banner.id} banner={banner}></SingleBanner>
                </SwiperSlide>
            ))}
        </Swiper>
    </div >
    );
};

export default Banner;