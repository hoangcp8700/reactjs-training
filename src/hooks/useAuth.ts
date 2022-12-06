import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import AuthenticateAPI from "api/authentication";
import { useAuthenticate } from "context/AuthenticateContext";
import { getAccessToken, removeAccessToken, setAccessToken } from "api/common/storage";
import { baseSlug } from "utils/functions";
import { CONSTANT_ROUTE } from "routes/constants";

const language = "VI";

const useAuth = () => {
  const { user, isAuth, updateAuth, updateUser } = useAuthenticate();
  const navigate = useNavigate();

  const { mutate: onFetchProfile, isLoading } = useMutation(AuthenticateAPI.PROFILE);

  const handleProfile = useCallback(() => {
    const token = getAccessToken();

    if (token) {
      onFetchProfile(undefined, {
        onSuccess: (res) => {
          updateUser(res);
          updateAuth(true);
        },
      });
    }
  }, [onFetchProfile, updateAuth, updateUser]);

  const handleLogin = useCallback(
    (accessToken: string) => {
      // login here!!
      setAccessToken(accessToken);
      updateAuth(true);
    },
    [updateAuth],
  );

  const handleLogout = useCallback(() => {
    updateUser(undefined);
    updateAuth(false);
    removeAccessToken();
    navigate(baseSlug(CONSTANT_ROUTE[language].LOGIN));
  }, [navigate, updateAuth, updateUser]);

  return { user, isAuth, isLoading, handleProfile, handleLogin, handleLogout };
};

export default useAuth;
