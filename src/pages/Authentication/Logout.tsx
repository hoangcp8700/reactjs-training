import Loading from "components/atoms/Loading";
import useAuth from "hooks/useAuth";
import React, { useEffect } from "react";

const Logout: React.FC = () => {
  const { handleLogout } = useAuth();

  useEffect(() => handleLogout(), [handleLogout]);

  return <Loading fullScreen />;
};

export default Logout;
