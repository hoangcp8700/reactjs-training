import { ResetPasswordFormProps } from "api/authentication/type";
import Input from "components/atoms/Input";
import FormProviderContainer, {
  ButtonSubmitControl,
  FormControl,
} from "components/molecules/FormProvider";
import React from "react";

import { LayoutAuthenticationProps } from "./Layout";

const ResetPassword: React.FC<LayoutAuthenticationProps<ResetPasswordFormProps>> = ({
  onSubmit,
  methods,
  btnSubmit,
}) => (
  <FormProviderContainer method={methods} onSubmit={onSubmit} id='form-reset-password'>
    <FormControl name='code'>
      {({ field, fieldState: { error } }) => (
        <Input
          {...field}
          id='code'
          type='Code'
          label='Code'
          required
          error={error?.message}
          placeholder='Nhập code'
        />
      )}
    </FormControl>
    <FormControl name='password'>
      {({ field, fieldState: { error } }) => (
        <Input
          {...field}
          id='password'
          type='password'
          label='Mật khẩu'
          required
          error={error?.message}
          placeholder='Nhập mật khẩu'
        />
      )}
    </FormControl>

    <FormControl name='passwordConfirmation'>
      {({ field, fieldState: { error } }) => (
        <Input
          {...field}
          id='passwordConfirmation'
          type='password'
          label='Xác nhận mật khẩu'
          required
          error={error?.message}
          placeholder='Xác nhận mật khẩu'
        />
      )}
    </FormControl>

    <ButtonSubmitControl btnSubmitText={btnSubmit} />
  </FormProviderContainer>
);

export default ResetPassword;
