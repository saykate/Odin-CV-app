import { createContext, useState, FC, ReactNode } from "react";

type Colors = {
  primaryLight: string,
  primaryMedium: string, 
  primaryDark: string,
  accent: string,
}

type ColorTheme = {
  light: Colors;
  dark: Colors;
}

const colors: ColorTheme = {
  light: {
    primaryLight: "#fffae5",
    primaryMedium: "#fff6cc", 
    primaryDark: "#ffee99",
    accent: "#01497c",
  },

  dark: {
    primaryLight: "#468faf",
    primaryMedium: "#2a6f97", 
    primaryDark: "#01497c",
    accent: "#fffae5",
  },

}

type ThemeContextType = {
  toggleTheme: () => void;
  flavor: Colors;
  theme: keyof typeof colors;
}

export const ThemeContext = createContext<ThemeContextType>({ toggleTheme: () => {}, flavor: {primaryLight: "", primaryMedium: "", primaryDark: "", accent: "",}, theme: "light" })

const ThemeWrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState('light' as keyof typeof colors)
    const toggleTheme = () => {
              setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
            };
    const flavor = colors[theme]

    return (
        <ThemeContext.Provider value={{toggleTheme, flavor, theme}}>
          { children }
        </ThemeContext.Provider>

    )
}

export default ThemeWrapper

