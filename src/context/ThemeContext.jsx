import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme-mode") || "dark";
  });

  const [color, setColor] = useState(() => {
    return localStorage.getItem("theme-color") || "blue";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      mode
    );

    localStorage.setItem(
      "theme-mode",
      mode
    );
  }, [mode]);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-color",
      color
    );

    localStorage.setItem(
      "theme-color",
      color
    );
  }, [color]);

  const toggleMode = () => {
    setMode((previousMode) =>
      previousMode === "dark"
        ? "light"
        : "dark"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        color,
        setColor,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}