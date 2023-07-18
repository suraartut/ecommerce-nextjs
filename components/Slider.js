import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="slider w-full h-screen">
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"fade"}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        className="mySwiper h-screen w-full"
      >
        <SwiperSlide>
          <Image
            src="/Images/slider_1.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Slider 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/Images/slider_2.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Slider 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/Images/slider_3.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Slider 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
