import React, { Suspense, useEffect } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { PageLoader } from "widgets/PageLoader";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";

const App: React.FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar data-testid="navbar" />
        <div className="content-page">
          <Sidebar data-testid="sidebar" />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
