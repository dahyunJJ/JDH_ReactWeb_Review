import { useState } from "react";

function Count() {
  let [count, setCount] = useState(1);
  return (
    <>
      <div className="countCon">
        <button
          className="min"
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          -
        </button>
        <span>{count < 1 ? setCount(1) : count}</span>
        <button
          className="plus"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default Count;
