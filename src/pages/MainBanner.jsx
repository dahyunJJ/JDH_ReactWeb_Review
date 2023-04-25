import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css/pagination";

function MainBanner() {
  return (
    <section className="MainBanner mw">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="imgCon bg1">
            <img
              src={`${process.env.PUBLIC_URL}/img/Img_bg1.jpg`}
              alt="배너1"
            />
            <div className="imgText">
              <h2>Gold big hoops</h2>
              <p>$ 68.00</p>
              <Link to="/Shop" className="btn">
                View Product
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgCon bg2">
            <img
              src={`${process.env.PUBLIC_URL}/img/Img_bg2.jpg`}
              alt="배너2"
            />
            <div className="imgText">
              <h2>Gold big hoops</h2>
              <p>$ 68.00</p>
              <Link to="/Shop" className="btn">
                View Product
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgCon bg3">
            <img
              src={`${process.env.PUBLIC_URL}/img/Img_bg3.jpg`}
              alt="배너3"
            />
            <div className="imgText">
              <h2>Gold big hoops</h2>
              <p>$ 68.00</p>
              <Link to="/Shop" className="btn">
                View Product
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default MainBanner;
