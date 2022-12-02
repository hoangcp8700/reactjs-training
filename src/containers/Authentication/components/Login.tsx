import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import AuthenticateAPI from "api/authentication";
import { LoginFormProps } from "api/authentication/type";
import { toastSingleMode } from "components/molecules/Toast";
import FormAuthentication from "components/organisms/FormAuthentication";
import React, { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { CONSTANT_ROUTE } from "routes/constants";
import { ERROR_GENERAL } from "utils/constants";
import { baseSlug } from "utils/functions";
import { IMAGES_CONSTANTS } from "utils/imports";
import { loginSchema } from "utils/schemas";
import { SubmitHandler } from "react-hook-form/dist/types";
import { setAccessToken } from "api/common/storage";
import { useAuthenticate } from "context/AuthenticateContext";

interface LoginContainerProps {}

const language = "VI";

const LoginContainer: React.FC<LoginContainerProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.from) {
      setSearchParams({ next: location.state?.from });
    }
  }, [location.state?.from, setSearchParams]);

  // Get redirect location or provide fallback
  const redirectLocationBefore = useMemo(
    () => searchParams.get("next") || baseSlug(CONSTANT_ROUTE[language].HOME),
    [searchParams],
  );

  const { login } = useAuthenticate();

  const methods = useForm<UseFormHookType<LoginFormProps>>({
    defaultValues: {
      userName: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  const { mutate: handleSubmit, isLoading } = useMutation(AuthenticateAPI.LOGIN);

  const onSubmit: SubmitHandler<LoginFormProps> = useCallback(
    (data: LoginFormProps) => {
      handleSubmit(data, {
        onSuccess: (res) => {
          login();
          setAccessToken(res.data.accessToken);
          methods.reset();
          toastSingleMode({
            message: "Đăng nhập thành công",
            content: "Nhiều sản phẩm ưu đãi đang chờ bạn!",
            type: "success",
            once: true,
          });
          navigate(redirectLocationBefore);
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
          if (error) {
            console.log("login submit", error);
            toastSingleMode({
              message: "Đăng nhập thất bại",
              type: "error",
              once: true,
            });

            if (error?.message) {
              methods.setError(ERROR_GENERAL, {
                message: error.message[language.toLowerCase()],
              });
            }
          }
        },
      });
    },
    [redirectLocationBefore, methods, login, navigate, handleSubmit],
  );

  return (
    <FormAuthentication.Layout
      title='Welcome to ecommerce'
      subTitle='Start for free'
      description={{
        text: `Don't have account?`,
        link: {
          text: "Sign up",
          href: baseSlug(CONSTANT_ROUTE.VI.REGISTER),
          target: "_self",
        },
      }}
      background={IMAGES_CONSTANTS.LayerAuthentication}
    >
      <FormAuthentication.Login
        btnSubmit='Login'
        onSubmit={onSubmit}
        methods={methods}
        isLoading={isLoading}
      />
    </FormAuthentication.Layout>
  );
};

export default LoginContainer;
