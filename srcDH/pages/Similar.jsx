import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import ProductCard from "./ProductCard";

function Similar({ data }) {
  console.log(data);
  return (
    <div className="Similar">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* 여기서 data는 Detail.jsx 에서 넘어온 dataList 배열 */}
        {data.map((item, i) => (
          <SwiperSlide key={item._id}>
            <ProductCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Similar;
