import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getRandomNumber } from '../utils';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.div`
  background: ${({ solid }: { solid: boolean }) =>
    solid ? 'red' : 'white'};
  border: 1px solid black;
  text-align: center;
  vertical-align: center;
  width: 100px;
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
  user-select: none;
`;

export const LayoutEffectHook = () => {
  const [value, setValue] = useState(0);

  // useLayoutEffect(() => {
  //   if (value < 0) {
  //     setValue(getRandomNumber());
  //   }
  // }, [value]);

  useEffect(() => {
    if (value < 0) {
      setValue(getRandomNumber());
    }
  }, [value]);

  return (
    <StyledContainer onClick={() => setValue(-1)}>
      <StyledButton solid={value < 0}>value: {value}</StyledButton>
    </StyledContainer>
  );
};
