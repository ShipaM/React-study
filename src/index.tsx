import React from "react";
import ReactDOM from "react-dom/client"; // Импортируем из 'react-dom/client'
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";

import "shared/config/i18n/i18n";

// Создаём корень
const root = ReactDOM.createRoot(document.getElementById("root"));

// Рендерим приложение
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

// Old
// import { render } from "react-dom";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
