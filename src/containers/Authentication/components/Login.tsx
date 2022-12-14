/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import AuthenticateAPI from "api/authentication";
import { LoginFormProps } from "api/authentication/type";
import { toastSingleMode } from "components/molecules/Toast";
import React, { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { CONSTANT_ROUTE } from "routes/constants";
import { ERROR_GENERAL } from "utils/constants";
import { baseSlug } from "utils/functions";
import { IMAGES_CONSTANTS } from "utils/imports";
import { loginSchema } from "utils/schemas";
import { SubmitHandler } from "react-hook-form/dist/types";
import FormAuthentication from "components/templates/FormAuthentication";
import useAuth from "hooks/useAuth";

interface LoginContainerProps {}

const language = "VI";

const LoginContainer: React.FC<LoginContainerProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { handleLogin } = useAuth();

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
          handleLogin(res.data.accessToken);
          methods.reset();
          toastSingleMode({
            message: "????ng nh???p th??nh c??ng",
            content: "Nhi???u s???n ph???m ??u ????i ??ang ch??? b???n!",
            type: "success",
            once: true,
          });
          navigate(redirectLocationBefore);
        },
        onError: (error: any) => {
          if (error) {
            console.log("login submit", error);
            toastSingleMode({
              message: "????ng nh???p th???t b???i",
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
    [handleSubmit, handleLogin, methods, navigate, redirectLocationBefore],
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
