import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormProps } from "api/authentication/type";
import FormAuthentication from "components/organisms/FormAuthentication";
import { useAuthenticate } from "context/AuthenticateContext";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CONSTANT_ROUTE } from "routes/constants";
import { ERROR_GENERAL } from "utils/constants";
import { baseSlug } from "utils/functions";
import { IMAGES_CONSTANTS } from "utils/imports";
import { loginSchema } from "utils/schemas";

interface LoginContainerProps {}

const LoginContainer: React.FC<LoginContainerProps> = () => {
  const { login } = useAuthenticate();
  const navigate = useNavigate();

  const methods = useForm<UseFormHookType<LoginFormProps>>({
    defaultValues: {
      userName: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: LoginFormProps) => {
    try {
      await login(data);
      methods.reset();
      navigate(`/`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error) {
        if (error?.length) {
          error?.forEach((ele: ResponseAPIValidateError) => {
            methods.setError(ele.field as keyof LoginFormProps, { message: ele.message });
          });
        }

        if (error?.message) {
          methods.setError(ERROR_GENERAL, {
            message: error.message.vi,
          });
        }
      }
    }
  };
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
      <FormAuthentication.Login btnSubmit='Login' onSubmit={onSubmit} methods={methods} />
    </FormAuthentication.Layout>
  );
};

export default LoginContainer;
