import { useState } from "react";
import ListCard from "./ListCard";

function AllList({ data }) {
  let [dataList, setDataList] = useState(data);
  return (
    <section className="AllList">
      <nav className="ShopBtnWrap">
        <button
          className="btn"
          onClick={() => {
            setDataList(data);
          }}
        >
          등록순
        </button>
        <button
          className="btn"
          onClick={() => {
            setDataList([...dataList].sort((a, b) => a.price - b.price));
          }}
        >
          낮은 가격
        </button>
        <button
          className="btn"
          onClick={() => {
            setDataList([...dataList].sort((a, b) => b.price - a.price));
          }}
        >
          높은 가격
        </button>
        <button
          className="btn"
          onClick={() => {
            setDataList([...dataList].sort((a, b) => b.discount - a.discount));
          }}
        >
          높은 할인율
        </button>
      </nav>

      <ul className="listCon">
        {dataList.map((item) => {
          return (
            <li className="list" key={item._id}>
              <ListCard item={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default AllList;
