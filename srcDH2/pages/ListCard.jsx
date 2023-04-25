import { Link } from "react-router-dom";
function ListCard({ item }) {
  return (
    <>
      <div className="imgCon">
        <p className="discount">{item.discount}%</p>
        <img
          src={`${process.env.PUBLIC_URL}/img/${item.img}`}
          alt={item.title}
        />
        <p className="imgLabel">ADD TO CART</p>
      </div>
      <p>{item.title}</p>
      <p>{Number(item.price).toLocaleString()}원</p>
      <Link to={`/detail/${item._id}`} className="detailBtn"></Link>
    </>
  );
}

export default ListCard;
