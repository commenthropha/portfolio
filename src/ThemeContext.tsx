import { createContext, useContext, useState, ReactNode } from "react";

const ThemeContext = createContext({ light: false, toggle: () => {} });

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [light, setLight] = useState(false);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("dark", !next);
  };

  return (
    <ThemeContext.Provider value={{ light, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
