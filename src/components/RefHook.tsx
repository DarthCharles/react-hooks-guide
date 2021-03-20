import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  height: 30px;
`;

const StyledButton = styled.button`
  height: 36px;
`;

const StyledText = styled.div`
  font-size: 18px;
  padding-bottom: 10px;
`;

export const RefHook = () => {
  const renderCountRef = useRef(0);
  const inputRef = useRef(null);

  const [value, setValue] = useState('');

  // Example of getting re-render count using state
  const [count] = useState(0);

  // useEffect(() => {
  // console.count("Infinite loop");
  // setCount((prevCount) => prevCount + 1);
  // });

  // Example of getting re-render count using ref
  useEffect(() => {
    renderCountRef.current = renderCountRef.current + 1;
  });

  const onClickHandler = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = 'Some nice value';
    }
  };

  return (
    <div>
      <StyledText>
        I've rendered {renderCountRef.current} times using ref.
      </StyledText>
      <StyledText>I've rendered {count} times</StyledText>
      <br />
      <StyledInput
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
      <StyledButton onClick={onClickHandler}>Click me</StyledButton>
    </div>
  );
};
