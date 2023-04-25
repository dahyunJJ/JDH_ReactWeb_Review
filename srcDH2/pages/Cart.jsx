import { useSelector, useDispatch } from "react-redux";
import { addCount, minusCount, deleteItem } from "../store/cartStore";
import { Link } from "react-router-dom";

function Cart() {
  let user = useSelector((state) => state.user.name);
  let cart = useSelector((state) => state.cart);

  let dispatch = useDispatch();

  return (
    <>
      <section className="cart mw">
        <h1>
          <span>{user}</span>님의 장바구니
        </h1>
        <table className="cartTable">
          <colgroup>
            <col width="30px" />
            <col width="*" />
            <col width="100px" />
            <col width="100px" />
            <col width="100px" />
            <col width="100px" />
          </colgroup>
          {/* table의 가로 사이즈를 결정하는 요소 */}
          <thead>
            <tr>
              <th>ID</th>
              <th>상품명+이미지+옵션내용</th>
              <th>상품가격</th>
              <th>상품수량</th>
              <th>결제금액</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id}>
                <th className="center">{item._id}</th>
                <td>
                  <Link to={`/Detail/${item._id}`}>
                    <img
                      src={`${process.env.PUBLIC_URL}/img/${item.img}`}
                      alt={item.productName}
                    />
                    <span>{item.productName}</span>
                  </Link>
                </td>
                <td className="right">
                  {Number(item.price).toLocaleString()}원
                </td>
                <td className="center">
                  {item.count <= 0 ? (
                    <button disabled>-</button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(minusCount(item._id));
                      }}
                    >
                      -
                    </button>
                  )}

                  {item.count}
                  <button
                    onClick={() => {
                      dispatch(addCount(item._id));
                    }}
                  >
                    +
                  </button>
                </td>
                <td className="right">
                  {Number(item.price * item.count).toLocaleString()}원
                </td>
                <td className="center">
                  <button
                    onClick={() => {
                      dispatch(deleteItem(item._id));
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}>
                총 결제 금액 :
                {Number(
                  cart.reduce((a, b) => {
                    return a + b.price * b.count;
                  }, 0)
                ).toLocaleString()}
                원
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  );
}

export default Cart;
