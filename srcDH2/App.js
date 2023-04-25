import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

import "./css/my_reset.css";
import "./css/App.css";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Watch from "./pages/Watch";

import list from "./pages/productData";

function App() {
  let [data] = useState(list);
  let urlname = useLocation().pathname;
  // console.log(urlname);

  let [watched, setWatched] = useState([]);
  console.log(watched);

  useEffect(() => {
    if (!localStorage.getItem("watched")) {
      localStorage.setItem("watched", JSON.stringify([]));
    } else {
      let watched = JSON.parse(localStorage.getItem("watched"));
      setWatched(watched);
    }
  }, []);
  // 로컬스토리지에 watched라는 키값이 없으면 빈 배열을 넣어준다.
  // 초기값이 비어있을 때 한번만 실행

  return (
    <div className="App">
      <Header urlname={urlname} />
      <Routes>
        <Route path="/" element={<Main data={data} />}></Route>
        <Route path="/Shop" element={<Shop data={data} />}></Route>
        <Route path="/Detail/:id" element={<Detail data={data} />}></Route>
        <Route path="/Cart" element={<Cart data={data} />}></Route>
        <Route path="/*" element={<Main data={data} />}></Route>
      </Routes>
      <Footer />
      <Watch watched={watched} />
    </div>
  );
}

export default App;
