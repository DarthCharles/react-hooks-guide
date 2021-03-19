import React, { useEffect, useMemo, useState } from "react";

import { getRandomNumber } from "../utils";

const fibonacci = (num: number): number => {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

const getFibonacciNumbers = (number: number) => {
  let res = [];

  for (let i = 0; i < number; i++) {
    res.push(fibonacci(i));
  }

  return res;
};

export const MemoHook = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(30);

  const numbers = useMemo(() => getFibonacciNumbers(num), [num]);
  // const numbers = getFibonacciNumbers(num);

  useEffect(() => {}, [count]);

  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <div>
        <input type="text" value={count} readOnly={true} />
        <button onClick={() => setCount(getRandomNumber())}>
          Get Random!
        </button>
      </div>
      <div>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(parseInt(e.target.value, 10))}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            paddingTop: 20,
          }}
        >
          {numbers.map((number, index) => (
            <div style={{ paddingRight: 10 }} key={`index_${index}`}>
              {number}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
