import { Link } from "react-router-dom";

function ProductCard({ data }) {
  return (
    <div className="ProductCard">
      <div className="cardImg">
        <img
          src={`${process.env.PUBLIC_URL}/img/${data.img}`}
          alt={data.title}
        />
        <span className="addCart">add to cart</span>
        {data.discount === "0" ? null : (
          <span className="discount">{data.discount}%</span>
        )}
      </div>
      <div>
        <p>{data.title}</p>
        <p>{data.price}</p>
      </div>
      <Link to={`/Detail/${data._id}`} className="btnAdd">
        상품디테일 페이지 이동
      </Link>
    </div>
  );
}

export default ProductCard;
