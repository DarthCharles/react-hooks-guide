import { useDebugValue, useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  useDebugValue('Hello from custom hook');

  return { count, increment, decrement };
};
