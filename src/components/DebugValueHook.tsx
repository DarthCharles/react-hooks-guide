import React from 'react';

import { useCounter } from '../hooks';

export const DebugValueHook = () => {
  const { count, increment } = useCounter();

  return (
    <React.Fragment>
      <input type="text" value={count} readOnly />
      <button onClick={increment}>Click Me!</button>
    </React.Fragment>
  );
};
