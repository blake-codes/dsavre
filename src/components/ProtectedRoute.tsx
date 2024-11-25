import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";

interface ProtectedRouteProps {
  redirectTo: string; // Where to redirect if not authenticated
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectTo }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
