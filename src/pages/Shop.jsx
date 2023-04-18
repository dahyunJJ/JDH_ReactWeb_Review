import { useState } from "react";

import ProductCard from "./ProductCard";

function Shop({ data }) {
  let [dataList, setDataList] = useState(data);

  return (
    <section className="Shop mw">
      <h2>Shop</h2>
      <nav className="btnCon">
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => a._id - b._id))
          }
        >
          상품등록순
        </button>
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => b._id - a._id))
          }
        >
          최신등록순
        </button>
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => a.price - b.price))
          }
        >
          낮은가격순
        </button>
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => b.price - a.price))
          }
        >
          높은가격순
        </button>
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => b.discount - a.discount))
          }
        >
          높은할인율
        </button>
      </nav>
      <ul className="listCon">
        {dataList.map((item) => (
          <li className="list" key={item._id}>
            {/* data 배열 안에 _id값 */}
            <ProductCard data={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Shop;
