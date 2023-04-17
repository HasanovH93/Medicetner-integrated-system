import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";

import ProductList from "./Products/Products";

const adminRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "all-products",
        element: <ProductList />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
];

export default adminRoutes;
