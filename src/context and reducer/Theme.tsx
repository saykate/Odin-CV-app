import { createContext, useState } from "react";

interface ThemeContextData {
    theme: string;
    toggleTheme: () => void; 
    colors: {
        text: string;
        background: string;
    }
  }
  
  export const ThemeContext = createContext<ThemeContextData>({
    theme: 'light',
    toggleTheme: () => {},
    colors: {
        text: '',
        background: '',
    }
  })

  export interface IThemeProviderProps {
    children: React.ReactNode;
  }

  const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const colors = {
        light: {
          text: "black",
          background: "white",
        },
        dark: {
          text: "white",
          background: "black",
        },
      };
    
      // Function to toggle the theme between light and dark
      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      };

    return (
        <ThemeContext.Provider
        value={{ theme, toggleTheme, colors: colors[theme] }}
        >
        {children}
        </ThemeContext.Provider>
    );
  }

export default ThemeProvider;