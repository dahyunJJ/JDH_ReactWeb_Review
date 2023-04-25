import "./css/App.css";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./pages/Header";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Footer from "./pages/Footer";

import list from "./pages/productData";

function App() {
  let subName = useLocation().pathname;
  // console.log(subName);
  let [data] = useState(list);
  return (
    <div>
      <Header subName={subName} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Blog" element={<div>Blog</div>} />
        <Route path="/Story" element={<div>Our Story</div>} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
