import React, { useState } from "react";

import { HookName } from "./HookName";

export const StateHook = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const drecrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <HookName name="useState" />
      <button onClick={incrementCount}>+</button>
      <span style={{ paddingLeft: 10, paddingRight: 10 }}>{count}</span>
      <button onClick={drecrementCount}>-</button>
    </div>
  );
};
