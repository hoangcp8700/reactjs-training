import Loading from "components/atoms/Loading";
import { useAuthenticate } from "context/AuthenticateContext";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { CONSTANT_ROUTE } from "routes/constants";
import { baseSlug } from "utils/functions";

const language = "VI";

const Logout: React.FC = () => {
  const { logout, isAuth } = useAuthenticate();

  useEffect(() => logout(), [logout]);

  if (!isAuth) {
    return <Navigate to={baseSlug(CONSTANT_ROUTE[language].LOGIN)} />;
  }

  return <Loading fullScreen />;
};

export default Logout;
