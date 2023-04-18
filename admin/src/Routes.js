import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import adminRoutes from "./pages/routes";
import OrderCardPage from "./pages/OrderPage/OrderPage";

const Routes = () => {
  return (
    <ReactRoutes>
      
      {adminRoutes.map((route, i) => (
        <Route key={i} path={route.path} element={route.element}>
          {route.children &&
            route.children.map((childRoute, j) => (
              <Route
                key={j}
                path={childRoute.path}
                element={childRoute.element}
              />
            ))}
        </Route>
      ))}
    </ReactRoutes>
  );
};

export default Routes;
