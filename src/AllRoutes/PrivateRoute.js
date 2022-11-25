import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextApi } from "../Auth/AuthContext";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(ContextApi);
  console.log(user);
  const location = useLocation();

  if (loader) {
    return <LoaderSpinner></LoaderSpinner>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
