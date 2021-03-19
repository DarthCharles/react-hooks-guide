import React, { useState } from "react";

const expensiveComputation = () => {
  return 4;
};

export const StateHook = () => {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(() => expensiveComputation());
  // const [count, setCount] = useState(expensiveComputation());

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>+</button>
      <span
        style={{
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        {count}
      </span>
      <button onClick={decrementCount}>-</button>
    </div>
  );
};
