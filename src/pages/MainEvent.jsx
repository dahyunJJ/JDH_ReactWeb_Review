import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

function MainEvent() {
  return (
    <section className="mainEvent mw">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="eventList">
            <img
              src={`${process.env.PUBLIC_URL}/img/Img_bg1.jpg`}
              alt="event_01"
            />
            <div className="eventInfo">
              <p>상품이름</p>
              <button>구매하기</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="eventList">
            <img
              src={`${process.env.PUBLIC_URL}/img/Img_bg2.jpg`}
              alt="event_02"
            />
            <div className="eventInfo">
              <p>상품이름</p>
              <button>구매하기</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="eventList">
            <img
              src={`${process.env.PUBLIC_URL}/img/Img_bg3.jpg`}
              alt="event_03"
            />
            <div className="eventInfo">
              <p>상품이름</p>
              <button>구매하기</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default MainEvent;
