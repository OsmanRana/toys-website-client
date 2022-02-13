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
import { Link } from "react-router-dom";
const imageStyle = {
  borderRadius: "50%",
  maxWidth: "200px",
  height: "200px",
  backgroundColor: "black",
  cursor: "pointer",
  boxShadow: "1px 1px 2px gray",
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
          spaceBetween={5}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {brandNames.map((brandName) => (
            <SwiperSlide key={brandName.id}>
              <Link to={`/shopByBrand/${brandName.name}`}>
                <img
                  src={brandName.image}
                  alt="Brand Name"
                  style={imageStyle}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Container sx={{ display: { xs: "flex", md: "none" } }}>
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
