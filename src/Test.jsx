import React, { useState } from "react";

export const Test = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount((count + 1));
  };
  const dec = () => {
    setCount((count - 1));
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};
