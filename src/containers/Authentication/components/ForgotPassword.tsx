import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotPasswordFormProps } from "api/authentication/type";
import FormAuthentication from "components/templates/FormAuthentication";
import React from "react";
import { useForm } from "react-hook-form";
import { CONSTANT_ROUTE } from "routes/constants";
import { baseSlug } from "utils/functions";
import { IMAGES_CONSTANTS } from "utils/imports";
import { forgotPasswordSchema } from "utils/schemas";

interface ForgotPasswordContainerProps {}

const ForgotPasswordContainer: React.FC<ForgotPasswordContainerProps> = () => {
  const methods = useForm<ForgotPasswordFormProps>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(forgotPasswordSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: ForgotPasswordFormProps) => {
    console.log(data);
    methods.reset();
  };

  return (
    <FormAuthentication.Layout
      title='Welcome to ecommerce'
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
      <FormAuthentication.ForgotPassword methods={methods} btnSubmit='Submit' onSubmit={onSubmit} />
    </FormAuthentication.Layout>
  );
};

export default ForgotPasswordContainer;
