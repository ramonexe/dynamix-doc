import { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, ThemeType } from '../styles/themes';

type ThemeMode = 'light' | 'dark';

const ThemeContext = createContext({
  mode: 'light' as ThemeMode,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') setMode('dark');
  }, []);

  const toggleTheme = () => {
    const next = mode === 'light' ? 'dark' : 'light';
    setMode(next);
    localStorage.setItem('theme', next);
  };

  const theme: ThemeType = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
