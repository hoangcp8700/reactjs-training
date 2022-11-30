import FormAuthentication from "components/organisms/FormAuthentication";
import React from "react";
import { CONSTANT_ROUTE } from "routes/constants";
import { baseSlug } from "utils/functions";
import { IMAGES_CONSTANTS } from "utils/imports";

interface VerifyContainerProps {}

const VerifyContainer: React.FC<VerifyContainerProps> = () => (
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
    <FormAuthentication.Verify
      btnSubmit='Verify code'
      handleSubmit={(form) => console.log("submit VerifyContainer", form)}
    />
  </FormAuthentication.Layout>
);

export default VerifyContainer;
