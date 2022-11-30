import FormAuthentication from "components/organisms/FormAuthentication";
import React from "react";
import { CONSTANT_ROUTE } from "routes/constants";
import { baseSlug } from "utils/functions";
import { IMAGES_CONSTANTS } from "utils/imports";

interface ResetPasswordContainerProps {}

const ResetPasswordContainer: React.FC<ResetPasswordContainerProps> = () => (
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
    <FormAuthentication.ResetPassword
      btnSubmit='Submit'
      handleSubmit={(form) => console.log("submit ResetPasswordContainer", form)}
    />
  </FormAuthentication.Layout>
);

export default ResetPasswordContainer;
