import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "../../pages/Login/Login";

const ProtectedLoginPage = () => {
  const userToken = useSelector((state) => state.auth.userToken);

  return userToken ? <Navigate to="/dashboard" /> : <Login />;
};

export default ProtectedLoginPage;
