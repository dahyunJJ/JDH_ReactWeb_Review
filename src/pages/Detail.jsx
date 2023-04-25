import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useSelector, useDispatch } from "react-redux";

import "swiper/css";
import "swiper/css/navigation";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import ListCard from "./ListCard";

import { addItem } from "../store/cartStore";

function Detail() {
  let data = useSelector((state) => state.productData);
  let { id } = useParams();

  let item = data[id - 1];
  let dataList = data.filter((a) => a.category === item.category);
  let [count, setCount] = useState(1);

  const [modalShow, setModalShow] = useState(false);
  let dispatch = useDispatch();

  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem("watched") || "[]");
    const updatedWatched = [...new Set([item._id, ...watched])];
    localStorage.setItem("watched", JSON.stringify(updatedWatched));
  }, [item]);

  return (
    <section className="Detail mw">
      <div className="DetailCon">
        <div className="imgCon">
          <img
            src={`${process.env.PUBLIC_URL}/img/${item.img}`}
            alt={item.title}
          />
        </div>
        <div className="DetailText">
          <h2>{item.title}</h2>
          <p>{Number(item.price).toLocaleString()}원</p>

          <div className="cartWrap">
            <div className="countBtn">
              <span
                className="plus"
                onClick={() => {
                  setCount((prev) => prev - 1);
                }}
              >
                -
              </span>
              <span>{count < 1 ? setCount(1) : count}</span>
              <span
                className="minus"
                onClick={() => {
                  setCount((prev) => prev + 1);
                }}
              >
                +
              </span>
            </div>
            <div
              className="cartBtn"
              onClick={() => {
                dispatch(
                  addItem({
                    _id: item._id,
                    productName: item.title,
                    img: item.img,
                    price: item.price,
                    count: count,
                  })
                );
                setModalShow(true);
              }}
            >
              <span>ADD TO CART</span>
            </div>
          </div>
        </div>
      </div>

      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3 mw"
        fill
      >
        <Tab eventKey="home" title="Home">
          <div>test1</div>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <div>test2</div>
        </Tab>
        <Tab eventKey="longer-tab" title="Loooonger Tab">
          <div>test3</div>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <div>test4</div>
        </Tab>
      </Tabs>

      <h1>Similer Items</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="listCon mw"
      >
        {dataList.map((item) => {
          return (
            <SwiperSlide className="slide list" key={item._id}>
              <ListCard item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
}
export default Detail;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">장바구니</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>상품이 추가됬습니다.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Link to="/Cart">장바구니로 이동</Link>
      </Modal.Footer>
    </Modal>
  );
}
