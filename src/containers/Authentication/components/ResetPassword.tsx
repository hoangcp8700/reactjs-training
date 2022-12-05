import { yupResolver } from "@hookform/resolvers/yup";
import { ResetPasswordFormProps } from "api/authentication/type";
import React from "react";
import { useForm } from "react-hook-form";
import { CONSTANT_ROUTE } from "routes/constants";
import { baseSlug } from "utils/functions";
import { IMAGES_CONSTANTS } from "utils/imports";
import { resetPasswordSchema } from "utils/schemas";
import FormAuthentication from "components/templates/FormAuthentication";

interface ResetPasswordContainerProps {}

const ResetPasswordContainer: React.FC<ResetPasswordContainerProps> = () => {
  const methods = useForm<ResetPasswordFormProps>({
    defaultValues: {
      code: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: yupResolver(resetPasswordSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: ResetPasswordFormProps) => {
    console.log(data);
    methods.reset();
  };

  return (
    <FormAuthentication.Layout
      title='Welcome to ecommerce'
      description={{
        text: `Already have account?`,
        link: {
          text: "Log in",
          href: baseSlug(CONSTANT_ROUTE.VI.LOGIN),
          target: "_self",
        },
      }}
      background={IMAGES_CONSTANTS.LayerAuthentication}
    >
      <FormAuthentication.ResetPassword methods={methods} btnSubmit='Submit' onSubmit={onSubmit} />
    </FormAuthentication.Layout>
  );
};
export default ResetPasswordContainer;
