import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

function MainTopList({ data }) {
  // console.log(data);
  let dataList = data.filter((item) => item.category === "top");
  return (
    <>
      <section className="MainTopList mw">
        <h2>Shop The Latest</h2>
        <Link to="/" className="btnAll">
          View All
        </Link>
        <ul className="listCon">
          {dataList.map((item) => (
            <li className="list" key={item._id}>
              {/* data 배열 안에 _id값 */}
              <ProductCard data={item} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default MainTopList;
