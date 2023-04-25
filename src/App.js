import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

function App() {
  let urlName = useLocation().pathname;

  let [recentItems, setRecentItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("watched")) {
      let recentItems = JSON.parse(localStorage.getItem("watched")).slice(0, 4);
      setRecentItems(recentItems);
    } else setRecentItems([]);
  }, [urlName]);

  return (
    <div className="App">
      <Header urlName={urlName} recentItems={recentItems} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/Detail/:id" element={<Detail />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/*" element={<Main />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
