import { AuthProfileProps } from "api/authentication/type";
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

type AuthenticateContextType = {
  isAuth: boolean;
  user?: AuthProfileProps | object | null;
  updateAuth: (status: boolean) => void;
  updateUser: <T extends object>(user?: T) => void;
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
  const [user, setUser] = useState<object | undefined>();
  const [isAuth, setIsAuth] = useState(false);

  const updateAuth = useCallback((status: boolean) => {
    setIsAuth(status);
  }, []);

  const updateUser = useCallback(<T extends object>(data?: T): void => setUser(data), []);

  const value = useMemo(
    () => ({
      user,
      isAuth,
      updateUser,
      updateAuth,
    }),
    [isAuth, user, updateAuth, updateUser],
  );

  return <AuthenticateContext.Provider value={value}>{children}</AuthenticateContext.Provider>;
};

export default AuthenticateProvider;
