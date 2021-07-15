import React, { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute: React.FC<RouteProps> = ({ children, ...props }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route {...props}>
      {user === null ? <Redirect to="/login" /> : children}
    </Route>
  );
};

export default ProtectedRoute;
