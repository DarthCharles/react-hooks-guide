import React, { useContext, useState } from "react";
import styled from "styled-components";

import { themes } from "../utils";

type Theme = {
  foreground: string;
  background: string;
};

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
  font-size: 24px;
  color: ${({ theme }: { theme: Theme }) => theme.foreground};
  background: ${({ theme }: { theme: Theme }) => theme.background};
`;

const StyledButton = styled.button`
  width: 300px;
  margin-bottom: 10px;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ThemeContext = React.createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: themes.light,
  toggleTheme: () => null,
});

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentTheme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{ theme: themes[currentTheme], toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const Box = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <BoxContainer theme={theme}>
      <p>Box</p>
    </BoxContainer>
  );
};

const Container = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <StyledButton onClick={toggleTheme}>Switch Theme</StyledButton>
      <StyledContainer>
        <Box />
      </StyledContainer>
    </React.Fragment>
  );
};

export const ContextHook = () => {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
};
