import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";


const Gallery = () => {
  
    return (
      <div className="bg-gray-100">
      
        <div className="md:w-8/12 mx-auto">
         
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          >
          <SwiperSlide>
            <img  style={{height: "300px"}} className="overflow-hidden" src="https://m.media-amazon.com/images/I/81UDnYzKbXL._AC_SX569_.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{height: "300px"}} src="https://m.media-amazon.com/images/I/91aTd-k35qL._AC_SX569_.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://m.media-amazon.com/images/I/91g0lpKJpzL._AC_SX569_.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://m.media-amazon.com/images/I/81DNODTjH3L._AC_SX569_.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://m.media-amazon.com/images/I/81AVQ-ZJjXL._AC_SX569_.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://m.media-amazon.com/images/I/812RBsQfxtL._AC_SX569_.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://m.media-amazon.com/images/I/81uwk+ags9L._AC_SX569_.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://m.media-amazon.com/images/I/8120QLDtd-L._AC_UL320_.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
          </div>
    );
};

export default Gallery;