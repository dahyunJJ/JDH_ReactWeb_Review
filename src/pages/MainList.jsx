import ListCard from "./ListCard";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

function MainList() {
  
  let data = useSelector((state) => state.productData)
 
  let dataList = data.filter((item) => item.category === "top");
  return (
    <section className="MainList mw">
      <h1>Shop The Lastest</h1>
      <Link to="/Shop" className="btn">
        View All
      </Link>

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

export default MainList;
