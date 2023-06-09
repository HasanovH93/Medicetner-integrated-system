import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";

const ProtectedRoute = () => {
  const userToken = useSelector((state) => state.auth.userToken);

  return userToken ? <Dashboard /> : <Navigate to="/" />;
};

export default ProtectedRoute;
