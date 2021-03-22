import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  font-size: 28px;
  padding: 40px;
`;

const StyledSpan = styled.span`
  padding: 0px 10px;
`;

export const Counter = () => {
  const [count, setCount] = useState(34);

  // const [count, setCount] = useState(() => {
  //   return 4;
  // });

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>+</button>
      <StyledSpan>{count}</StyledSpan>
      <button onClick={decrementCount}>-</button>
    </div>
  );
};

const ColoredButtons = () => {
  const [colors, buttonColors] = useState<any>({
    button1: 'red',
    button2: 'blue',
    button3: 'green',
  });

  return (
    <div>
      <StyledButton
        onClick={() => buttonColors({ ...colors, button1: 'purple' })}
        style={{ background: colors.button1 }}
      >
        Button 1
      </StyledButton>
      <StyledButton style={{ background: colors.button2 }}>
        Button 2
      </StyledButton>
      <StyledButton style={{ background: colors.button3 }}>
        Button 3
      </StyledButton>
    </div>
  );
};

export const StateHook = () => {
  return (
    <div>
      {/* <Counter /> */}
      <ColoredButtons />
    </div>
  );
};
