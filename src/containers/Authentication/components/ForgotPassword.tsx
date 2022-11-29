import FormAuthentication from "components/organisms/FormAuthentication";
import React from "react";
import { CONSTANT_ROUTE } from "routes/constants";
import { baseSlug } from "utils/functions";
import { IMAGES_CONSTANTS } from "utils/imports";

interface ForgotPasswordContainerProps {}

const ForgotPasswordContainer: React.FC<ForgotPasswordContainerProps> = () => (
  <FormAuthentication.Layout
    title='Welcome to ecommerce'
    description={{
      text: `Don't have account?`,
      link: {
        text: "Sign up",
        url: baseSlug(CONSTANT_ROUTE.VI.REGISTER, true),
        target: "_self",
      },
    }}
    background={IMAGES_CONSTANTS.LayerAuthentication}
  >
    <FormAuthentication.ForgotPassword
      btnSubmit='Submit'
      handleSubmit={(form) => console.log("submit ForgotPasswordContainer", form)}
    />
  </FormAuthentication.Layout>
);

export default ForgotPasswordContainer;
