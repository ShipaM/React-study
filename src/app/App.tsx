import React, { Suspense, useEffect } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { PageLoader } from "widgets/PageLoader";
import { useDispatch, useSelector } from "react-redux";
import { getUserIsInited, userActions } from "entities/User";

const App: React.FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const isInited = useSelector(getUserIsInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar data-testid="navbar" />
        <div className="content-page">
          <Sidebar data-testid="sidebar" />
          {isInited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
