import { useMutation } from "@tanstack/react-query";
import AuthenticateAPI from "api/authentication";
import { AuthProfileProps } from "api/authentication/type";
import { getAccessToken, removeAccessToken } from "api/common/storage";
// import Loading from "components/atoms/Loading";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type AuthenticateContextType = {
  login: () => void;
  logout: () => void;
  isAuth: boolean;
  user?: AuthProfileProps | object | null;
};

interface AuthenticateProviderProps {
  children: React.ReactNode;
}

// Hook to provide access to context object
export const AuthenticateContext = createContext<AuthenticateContextType>(
  {} as AuthenticateContextType,
);

export const useAuthenticate = () => useContext(AuthenticateContext);

const AuthenticateProvider: React.FC<AuthenticateProviderProps> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const token = useMemo(() => getAccessToken(), []);

  const { mutate: onFetch } = useMutation(AuthenticateAPI.PROFILE);

  useEffect(() => {
    // FIRST PAGE : CHECK TOKEN
    if (token) {
      onFetch(undefined, {
        onSuccess: (res) => {
          setUser(res);
          setIsAuth(true);
        },
      });
    }
  }, [onFetch, token]);

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuth(false);
    removeAccessToken();
  };

  const value = useMemo(
    () => ({
      user,
      isAuth,
      login,
      logout,
    }),
    [isAuth, user],
  );

  // if (isLoading) {
  //   return <Loading fullScreen />;
  // }
  return <AuthenticateContext.Provider value={value}>{children}</AuthenticateContext.Provider>;
};

export default AuthenticateProvider;
