import { ForgotPasswordFormProps } from "api/authentication/type";
import Input from "components/atoms/Input";
import FormProviderContainer, {
  ButtonSubmitControl,
  FormControl,
} from "components/molecules/FormProvider";
import React from "react";

import { LayoutAuthenticationProps } from "./Layout";

const ForgotPassword: React.FC<LayoutAuthenticationProps<ForgotPasswordFormProps>> = ({
  onSubmit,
  methods,
  btnSubmit,
}) => (
  <FormProviderContainer method={methods} onSubmit={onSubmit} id='form-forgot-password'>
    <FormControl name='email'>
      {({ field, fieldState: { error } }) => (
        <Input
          {...field}
          id='email'
          label='Email'
          type='email'
          required
          error={error?.message}
          placeholder='Nhập email'
        />
      )}
    </FormControl>

    <ButtonSubmitControl btnSubmitText={btnSubmit} />
  </FormProviderContainer>
);

export default ForgotPassword;
