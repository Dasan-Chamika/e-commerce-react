/** @format */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { AdsUrls } from "./AdsUlrs";

const Ads = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay]}
      className="rounded-md"
    >
      {AdsUrls?.map((adImg) => (
        <SwiperSlide key={adImg.id}>
          <img
            src={adImg.url}
            alt={adImg.alt + adImg.id}
            className="w-full h-[270px] object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Ads;
