import React, { useEffect } from 'react';

import { useCounter } from '../hooks';

export const DebugValueHook = () => {
  const { count, increment } = useCounter();

  useEffect(() => {
    console.log(count);
  }, [count]);

  return <button onClick={increment}>Click Me!</button>;
};
