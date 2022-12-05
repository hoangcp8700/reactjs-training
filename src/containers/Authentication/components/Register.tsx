import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import AuthenticateAPI from "api/authentication";
import { RegisterFormProps } from "api/authentication/type";
import { toastDismiss, toastSingleMode } from "components/molecules/Toast";
import ActionToast from "components/molecules/Toast/Action";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useNavigate } from "react-router-dom";
import { CONSTANT_ROUTE } from "routes/constants";
import { ERROR_GENERAL } from "utils/constants";
import { baseSlug } from "utils/functions";
import { IMAGES_CONSTANTS } from "utils/imports";
import { registerSchema } from "utils/schemas";
import FormAuthentication from "components/templates/FormAuthentication";

interface RegisterContainerProps {}

const language = "VI";

const RegisterContainer: React.FC<RegisterContainerProps> = () => {
  const navigate = useNavigate();

  const methods = useForm<UseFormHookType<RegisterFormProps>>({
    defaultValues: {
      userName: "",
      phone: "",
      email: "",
      fullName: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: yupResolver(registerSchema),
    mode: "onSubmit",
  });
  const { mutate: handleSubmit, isLoading } = useMutation(AuthenticateAPI.REGISTER);

  const onSubmit: SubmitHandler<RegisterFormProps> = useCallback(
    (data: RegisterFormProps) => {
      handleSubmit(data, {
        onSuccess: () => {
          methods.reset();
          toastSingleMode({
            message: "Đăng ký thành công",
            content: "Bạn có muốn đăng nhập ngay luôn không?",
            type: "success",
            once: true,
            children: (
              <ActionToast
                primaryBtn={{
                  children: "Đông ý",
                  onClick: () => {
                    navigate(baseSlug(CONSTANT_ROUTE[language].LOGIN));
                  },
                }}
                secondaryBtn={{
                  children: "Hủy bỏ",
                  onClick: () => toastDismiss(),
                }}
              />
            ),
          });
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
          if (error) {
            toastSingleMode({
              message: "Đăng ký thất bại",
              type: "error",
              once: true,
            });

            if (error?.errors?.length) {
              error?.errors?.forEach((ele: ResponseAPIValidateError) => {
                methods.setError(ele.field as keyof RegisterFormProps, { message: ele.message });
              });
            }

            if (error?.message) {
              methods.setError(ERROR_GENERAL, {
                message: error.message[language.toLowerCase()],
              });
            }
          }
        },
      });
    },
    [methods, navigate, handleSubmit],
  );

  return (
    <FormAuthentication.Layout
      title='Welcome to ecommerce'
      subTitle='Start for free'
      description={{
        text: `Already have account?`,
        link: {
          text: "Sign in",
          href: baseSlug(CONSTANT_ROUTE.VI.LOGIN),
          target: "_self",
        },
      }}
      background={IMAGES_CONSTANTS.LayerAuthentication}
    >
      <FormAuthentication.Register
        methods={methods}
        isLoading={isLoading}
        btnSubmit='Create account'
        onSubmit={onSubmit}
      />
    </FormAuthentication.Layout>
  );
};
export default RegisterContainer;
