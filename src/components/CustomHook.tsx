import React from 'react';
import styled from 'styled-components';

import { useCountRerenders, useDogFetcher, useTheme } from '../hooks';

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
  font-size: 24px;
  color: ${({ theme }: { theme: any }) => theme.foreground};
  background: ${({ theme }: { theme: any }) => theme.background};
`;

const StyledButton = styled.button`
  width: 300px;
  margin-bottom: 10px;
`;

const StyledDogPhoto = styled.img`
  height: 150px;
  width: 150px;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CustomHook = () => {
  const { dogPhoto } = useDogFetcher();
  const { theme, toggleTheme } = useTheme();

  useCountRerenders();

  return (
    <React.Fragment>
      <StyledButton onClick={toggleTheme}>Toggle Theme</StyledButton>
      <StyledContainer>
        <BoxContainer theme={theme}>
          <StyledDogPhoto src={dogPhoto} />
          <p>Dog</p>
        </BoxContainer>
      </StyledContainer>
    </React.Fragment>
  );
};
