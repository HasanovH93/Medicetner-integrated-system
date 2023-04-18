import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import adminRoutes from "./pages/routes";
import OrderCard from "./pages/SingleOrder/SingleOrder";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/orders/:id" element={<OrderCard />} />
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
