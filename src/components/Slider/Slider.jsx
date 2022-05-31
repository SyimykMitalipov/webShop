import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './style.css'

// import required modules
import { Autoplay , Pagination, Navigation } from "swiper";
const Slider = () => {
  return (
    <>
      <Swiper
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay ,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{
          height: '800px'
        }}
        >
            <div className="img">
            <img src="https://images.pexels.com/photos/6608247/pexels-photo-6608247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{
          height: '800px'
        }}>
        <div className="img">
            <img src="https://images.pexels.com/photos/8156983/pexels-photo-8156983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{
          height: '800px'
        }}>
        <div className="img">
            <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

export default Slider;
