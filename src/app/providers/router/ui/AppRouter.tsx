import { AboutAsyncPage } from "pages/About/ui/About.async";
import { MainAsyncPage } from "pages/Main/ui/Main.async";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routeConfig";

const AppRouter = () => {
  console.log(Object.values(routeConfig));
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route
              key={path}
              path={path}
              element={<div className="page-wrapper">{element}</div>}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;
