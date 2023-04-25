import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import ListCard from "./ListCard";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { addItem } from "../store/cartStore";

function Detail({ data }) {
  let { id } = useParams();
  let item = data[id - 1];
  let dataList = data.filter((a) => a.category === item.category);
  let [count, setCount] = useState(1);

  const [modalShow, setModalShow] = useState(false);
  let dispatch = useDispatch();

  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem("watched") || "[]");
    const updateWatched = [...new Set([...watched, item._id])];
    localStorage.setItem("watched", JSON.stringify(updateWatched));
  }, [item]);

  // const updateWatched = [...new Set([...watched, item._id])];
  // push 방법 - 나중 본 상품이 아래쪽에 쌓이는 형태
  // const updateWatched = [...new Set([item._id, ...watched])];
  // upshift 방법 - 나중 본 상품이 가장 위에 쌓이는 형태

  // useEffect(() => {
  //   let out = localStorage.getItem("watched");
  //   out = JSON.parse(out);
  //   out.push(item._id);
  //   out = new Set(out); // 중복제거
  //   out = [...out]; // 배열로 변환
  //   console.log(out);
  //   localStorage.setItem("watched", JSON.stringify(out));
  // }, [item]);

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
        className="mb-3"
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
        className="listCon"
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
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
