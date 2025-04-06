// components/ProtectedRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isLoggedIn } from "../api/dashboardUserServices";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (!isLoggedIn()) {
    // Redirect to login, preserving the location for redirect after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
