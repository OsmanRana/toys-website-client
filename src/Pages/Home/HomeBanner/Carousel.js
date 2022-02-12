import React from "react";
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box } from "@mui/system";

const Carousel = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/2691479/pexels-photo-2691479.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="toys"
              width="100%"
              height="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="toys"
              width="100%"
              height="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/3661389/pexels-photo-3661389.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="toys"
              width="100%"
              height="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="toys"
              width="100%"
              height="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="toys"
              width="100%"
              height="300px"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/2691478/pexels-photo-2691478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="toys"
              width="100%"
              height="300px"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/2691479/pexels-photo-2691479.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="toys"
              width="100%"
              height="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="toys"
              width="100%"
              height="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/3661389/pexels-photo-3661389.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="toys"
              width="100%"
              height="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="toys"
              width="100%"
              height="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="toys"
              width="100%"
              height="300px"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/2691478/pexels-photo-2691478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="toys"
              width="100%"
              height="300px"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default Carousel;
