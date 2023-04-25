function Watch({ watched }) {
  return (
    <>
      <div className="watch">
        <p>자주 본 상품</p>
        <ul className="list">
          {watched ? (
            watched.map((item, i) => (
              <li key={i}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/image${item}.jpg`}
                  alt="상품명"
                />
              </li>
            ))
          ) : (
            <li hidden></li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Watch;
