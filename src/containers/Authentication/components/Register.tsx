import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormProps } from "api/authentication/type";
import { toastDismiss, toastSingleMode } from "components/molecules/Toast";
import ActionToast from "components/molecules/Toast/Action";
import FormAuthentication from "components/organisms/FormAuthentication";
import { useAuthenticate } from "context/AuthenticateContext";
import React from "react";
import { useForm } from "react-hook-form";
import { CONSTANT_ROUTE } from "routes/constants";
import { ERROR_GENERAL } from "utils/constants";
import { baseSlug } from "utils/functions";
import { IMAGES_CONSTANTS } from "utils/imports";
import { registerSchema } from "utils/schemas";

interface RegisterContainerProps {}

const RegisterContainer: React.FC<RegisterContainerProps> = () => {
  const { register } = useAuthenticate();

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

  const onSubmit = async (data: RegisterFormProps) => {
    try {
      await register(data);
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
                toastDismiss();
              },
            }}
            secondaryBtn={{
              children: "Hủy bỏ",
              onClick: () => toastDismiss(),
            }}
          />
        ),
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error) {
        if (error?.length) {
          error?.forEach((ele: ResponseAPIValidateError) => {
            methods.setError(ele.field as keyof RegisterFormProps, { message: ele.message });
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
        btnSubmit='Create account'
        onSubmit={onSubmit}
      />
    </FormAuthentication.Layout>
  );
};
export default RegisterContainer;
