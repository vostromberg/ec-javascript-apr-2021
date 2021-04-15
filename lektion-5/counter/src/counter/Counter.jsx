import React, { useEffect, useState } from "react";
import Decreaser from "./Decreaser";
import Increaser from "./Increaser";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <Decreaser count={count} amount={10} onDecrease={setCount} />
      <Decreaser count={count} amount={5} onDecrease={setCount} />
      <Decreaser count={count} amount={1} onDecrease={setCount} />
      <Increaser count={count} amount={1} onIncrease={setCount} />
      <Increaser count={count} amount={5} onIncrease={setCount} />
      <Increaser count={count} amount={10} onIncrease={setCount} />
    </div>
  );
};

export default Counter;