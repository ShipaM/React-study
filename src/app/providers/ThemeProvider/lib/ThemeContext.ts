import { createContext } from "react";

export enum Theme {
  LIGHT = "app-light-theme",
  DARK = "app-dark-theme",
  ORANGE = "app-orange-theme",
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

//Создание контекста
//ДЛя создания контекста используется функция "createContext". Она возвращает объект контекста, который содержит два компонента: Provider и Consumer

export const ThemeContext = createContext<ThemeContextProps>({});

console.log(ThemeContext); //{Consumer, Provider}

export const LOCAL_STORAGE_THEME_KEY = "theme";
