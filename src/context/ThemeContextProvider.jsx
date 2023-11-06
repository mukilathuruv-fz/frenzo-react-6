import { createContext } from "react";

export const themeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  return (
    <themeContext.Provider value={"dark"}>{children}</themeContext.Provider>
  );
};

export default ThemeContextProvider;
