import React, { useState } from 'react';

import { themes } from './utils';

export type Theme = {
  foreground: string;
  background: string;
};

export const ThemeContext = React.createContext<{
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
  const [currentTheme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider
      value={{ theme: themes[currentTheme], toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
