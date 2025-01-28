import React from "react";
import ReactDOM from "react-dom/client"; // Импортируем из 'react-dom/client'
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import "app/styles/index";

import "shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { StoreProvider } from "app/providers/StoreProvider";

// Создаём корень
const root = ReactDOM.createRoot(document.getElementById("root"));

// Рендерим приложение
root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
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
