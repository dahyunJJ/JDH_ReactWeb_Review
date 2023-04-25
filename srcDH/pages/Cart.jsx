import { useDispatch, useSelector } from "react-redux";
import { changeName, increaseAge } from "../store/userSlice";

function Cart() {
  let user = useSelector((state) => state.user);
  let cart = useSelector((state) => state.cart);

  let dispatch = useDispatch();

  return (
    <>
      <section className="cart mw">
        <h1>
          <span>{user.name}</span>님 나이: {user.age} / 장바구니
          <button
            onClick={() => {
              dispatch(changeName());
              dispatch(increaseAge(10));
              // 파라미터값을 전달해서 쓸 수 있다.
            }}
          >
            이름변경
          </button>
        </h1>
        <table className="cartTable">
          <thead>
            <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
              <th>합계</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <>
                  <tr key={item._id}>
                    <td className="cartImg">
                      <div>
                        <img
                          src={`${process.env.PUBLIC_URL}/img/${item.img}`}
                          alt={item.productName}
                        />
                        <span>{item.productName}</span>
                      </div>
                    </td>
                    <td className="cartPrice">
                      {Number(item.price).toLocaleString()}원
                    </td>
                    <td className="cartCount">{item.count}</td>
                    <td className="cartTotal">
                      {(
                        Number(item.price) * Number(item.count)
                      ).toLocaleString()}
                      원
                    </td>
                    <td className="cartBtn">
                      <button className="cartDel">삭제</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Cart;
