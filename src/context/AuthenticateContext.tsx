import AuthenticateAPI from "api/authentication";
import { AuthProfileProps, LoginFormProps } from "api/authentication/type";
import { setAccessToken } from "api/common/storage";
import React, { createContext, useContext, useMemo, useState } from "react";

type AuthenticateContextType = {
  profile: () => void;
  login: (data: LoginFormProps) => Promise<boolean>;
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

  const profile = async () => {
    try {
      const response = await AuthenticateAPI.PROFILE();
      setUser(response);
      setIsAuth(true);
      return true;
    } catch (error) {
      return false;
    }
  };

  const login = async (data: LoginFormProps) => {
    try {
      const response = await AuthenticateAPI.LOGIN(data);
      setAccessToken(response.data.accessToken);
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuth(false);
  };

  const value = useMemo(
    () => ({
      user,
      isAuth,
      profile,
      login,
      logout,
    }),
    [isAuth, user],
  );

  return <AuthenticateContext.Provider value={value}>{children}</AuthenticateContext.Provider>;
};

export default AuthenticateProvider;
