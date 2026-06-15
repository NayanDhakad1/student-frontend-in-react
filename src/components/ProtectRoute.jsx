import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const isLogin = localStorage.getItem("isLogin");

  if (isLogin === "true") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }

};

export default ProtectedRoute;