import "./css/App.css";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./pages/Header";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
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
        <Route path="/" element={<Main data={data} />} />
        <Route path="/Shop" element={<Shop data={data} />} />
        <Route path="/Detail/:id" element={<Detail data={data} />} />
        <Route path="/Blog" element={<div>Blog</div>} />
        <Route path="/Story" element={<div>Our Story</div>} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
