import ProtectedLoginPage from "../components/ProtectedRoute/ProtectedLogin";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";

import ProductList from "./Products/Products";

const adminRoutes = [
  {
    path: "/dashboard",
    element: <ProtectedRoute component={Dashboard} />,
    children: [
      {
        path: "all-products",
        element: <ProductList />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedLoginPage component={Login} />,
  },
];

export default adminRoutes;
