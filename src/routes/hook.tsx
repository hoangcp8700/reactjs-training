import useAuth from "hooks/useAuth";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { baseSlug } from "utils/functions";

import { CONSTANT_ROUTE } from "./constants";
import { TemplateRouteProps } from "./paths";

const langCurrent = "VI";

export const PrivateRoute: React.FC<TemplateRouteProps> = ({ paths, component }) => {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return (
      <Navigate
        to={`/${CONSTANT_ROUTE[langCurrent].LOGIN}`}
        // check for page need authenticate => login => redirect path before
        state={{ from: baseSlug(paths[langCurrent === "VI" ? 1 : 0]) }}
        replace
      />
    );
  }
  return React.createElement(component);
};

const PublicRoute: React.FC<TemplateRouteProps> = ({ isLogin, component }) => {
  const { isAuth } = useAuth();
  const location = useLocation();

  // redirect login page when have isAuth => redirect path before
  if (isAuth && isLogin) {
    return <Navigate to={location.pathname || "/"} replace />;
  }
  return React.createElement(component);
};
export default PublicRoute;
