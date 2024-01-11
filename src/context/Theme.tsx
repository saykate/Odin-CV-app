import { createContext, useState, FC, ReactNode } from "react";

type Colors = {
  primary: string;
  secondary: string;
}

type ColorTheme = {
  light: Colors;
  dark: Colors;
  kinda: Colors;
}

const colors: ColorTheme = {
  light: {
    primary: "black",
    secondary: "teal",
  },

  dark: {
    primary: "white",
    secondary: "#ff4433",
  },

  kinda: {
    primary: "yellow", 
    secondary: "limegreen"
  }
}

type ThemeContextType = {
  toggleTheme: () => void;
  flavor: Colors;
}

export const ThemeContext = createContext<ThemeContextType>({ toggleTheme: () => {}, flavor: {primary: "", secondary: ""} })

const ThemeWrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState('light' as keyof typeof colors)
    const toggleTheme = () => {
              setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
            };
    const flavor = colors[theme]

    return (
        <ThemeContext.Provider value={{toggleTheme, flavor}}>
          { children }
        </ThemeContext.Provider>

    )
}

export default ThemeWrapper

