import FormAuthentication from "components/organisms/FormAuthentication";
import React from "react";
import { CONSTANT_ROUTE } from "routes/constants";
import { baseSlug } from "utils/functions";
import { IMAGES_CONSTANTS } from "utils/imports";

interface RegisterContainerProps {}

const RegisterContainer: React.FC<RegisterContainerProps> = () => (
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
      btnSubmit='Create account'
      handleSubmit={(form) => console.log("submit RegisterContainer", form)}
    />
  </FormAuthentication.Layout>
);

export default RegisterContainer;
