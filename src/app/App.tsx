import React, { Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutAsyncPage } from "pages/About/ui/About.async";
import { MainAsyncPage } from "pages/Main/ui/Main.async";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutAsyncPage />} />
          <Route path={"/"} element={<MainAsyncPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
