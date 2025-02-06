import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface IUseThemeResult {
  toggleTheme: () => void;
  theme?: Theme;
}

// useContext — это хук в React, который позволяет использовать контекст внутри функционального компонента. Контекст в React позволяет передавать данные через дерево компонентов без необходимости явно передавать их через пропсы на каждом уровне.

//Хук useContext используется для подписки на контекст в функциональных компонентах. Он принимает объект контекста, возвращаемый из createContext, и возвращает текущее значение контекста.

export const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
};
