import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogin = localStorage.getItem("isLogin");

  return isLogin === "true" ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;