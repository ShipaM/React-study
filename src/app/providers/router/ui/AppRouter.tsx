import React, { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AppRoutesProps,
  routeConfig,
} from "shared/config/routerConfig/routeConfig";
import { RequireAuth } from "./RequireAuth";
import { PageLoader } from "widgets/PageLoader";

const AppRouter = () => {
  // const isAuth = useSelector(getUserAuthData);

  // const routes = useMemo(
  //   () =>
  //     Object.values(routeConfig).filter((route) => {
  //       if (route.authOnly && !isAuth) {
  //         return false;
  //       }

  //       return true;
  //     }),
  //   [isAuth]
  // );

  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {/* <div className="page-wrapper"> */}
        {route.element}
        {/* </div> */}
      </Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return (
    // <Routes>
    //   {routes.map(({ element, path }) => (
    //     <Route
    //       key={path}
    //       path={path}
    //       element={
    //         <Suspense fallback={<PageLoader />}>
    //           <div className="page-wrapper">{element}</div>
    //         </Suspense>
    //       }
    //     />
    //   ))}
    // </Routes>
    <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
  );
};

export default memo(AppRouter);
