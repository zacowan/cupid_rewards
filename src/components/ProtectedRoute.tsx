import React from "react";
import firebase from "firebase/app";
import { Redirect, Route, RouteProps } from "react-router-dom";

const ProtectedRoute: React.FC<RouteProps> = ({ children, ...props }) => {
  const auth = firebase.auth();

  return (
    <Route {...props}>
      {auth.currentUser === null ? <Redirect to="/login" /> : children}
    </Route>
  );
};

export default ProtectedRoute;
