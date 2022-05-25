import { HashRouter, Route, RouteProps, Routes } from "react-router-dom";

import routes from "./dynamic-config";

const RouterRender = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        {routes.map((route: RouteProps, i: number) => (
          <Route key={i} {...route} />
        ))}
      </Routes>
    </HashRouter>
  );
};

export default RouterRender;
