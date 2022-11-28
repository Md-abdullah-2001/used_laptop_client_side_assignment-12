import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextApi } from "../../Auth/AuthContext";
import useAdmin from "../../Hooks/useAdmin";

import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";

const AdminRoute = ({ children }) => {
  const { user, loader } = useContext(ContextApi);
  //   console.log(user);
  const [isUser, adminLoading] = useAdmin(user.email);
  console.log(isUser);

  const location = useLocation();
  if (loader || adminLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }
  if (user && isUser === "admin") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
