import { useParams } from "react-router-dom";

import TabUI from "./TabUI";
import Similar from "./Similar";
import Count from "./Count";

function Detail({ data }) {
  // let id = useParams(); 오브젝트 형태로 쓰겠다는 의미
  let { id } = useParams(); // 가지고 있는 value값을 출력
  id = id - 1;

  let dataList = data.filter((a) => a.category === data[id].category);

  console.log(id);

  return (
    <section className="detail mw">
      <h2>상품 상세페이지</h2>
      <div className="detailCon">
        <div className="cardImg">
          <img
            src={`${process.env.PUBLIC_URL}/img/${data[id].img}`}
            alt={`${data[id].title}`}
          />
        </div>
        <div className="info">
          <h3>{data[id].title}</h3>
          <p>{data[id]._id}번 상품</p>
          <p>{data[id].price}원</p>
          <p>{data[id].discount}%</p>

          <Count />

          {/* <button type='submit'>주문하기</button> */}
        </div>
      </div>

      <TabUI />

      <Similar data={dataList} />
    </section>
  );
}

export default Detail;
