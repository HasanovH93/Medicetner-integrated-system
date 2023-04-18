import ProtectedLoginPage from "../components/ProtectedRoute/ProtectedLogin";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import OrderCardPage from "./OrderPage/OrderPage";

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
      {
        path: "orders/:id",
        element: <OrderCardPage />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedLoginPage component={Login} />,
  },
];

export default adminRoutes;
