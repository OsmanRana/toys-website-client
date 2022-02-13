import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box as Container } from "@mui/system";
import brandNames from "../../../mock/BrandNames";
import SectionHeader from "../../../components/Header/SectionHeader";
const imageStyle = {
  borderRadius: "50%",
  maxWidth: "200px",
  height: "200px",
  backgroundColor: "#fee63e",
  cursor: "pointer",
};

const Brands = () => {
  return (
    <>
      <SectionHeader text="Shop By Brand"></SectionHeader>
      <Container
        sx={{
          display: { xs: "none", md: "flex" },
          mt: 16,
        }}
      >
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {brandNames.map((brandName) => (
            <SwiperSlide key={brandName.id}>
              <img src={brandName.image} alt="Brand Name" style={imageStyle} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Container sx={{ display: { xs: "flex", md: "none" } }}>
        <SectionHeader text="Shop By Brand"></SectionHeader>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {brandNames.map((brandName) => (
            <SwiperSlide key={brandName.id}>
              <img src={brandName.image} alt="Brand Name" style={imageStyle} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default Brands;
