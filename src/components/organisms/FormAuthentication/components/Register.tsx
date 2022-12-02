import { RegisterFormProps } from "api/authentication/type";
import Input from "components/atoms/Input";
import FormProviderContainer, {
  ButtonSubmitControl,
  FormControl,
} from "components/molecules/FormProvider";
import React from "react";

import { LayoutAuthenticationProps } from "./Layout";

const Register: React.FC<LayoutAuthenticationProps<RegisterFormProps>> = ({
  onSubmit,
  methods,
  btnSubmit,
  isLoading,
}) => (
  <FormProviderContainer method={methods} onSubmit={onSubmit} id='form-register'>
    <FormControl name='userName'>
      {({ field, fieldState: { error } }) => (
        <Input
          {...field}
          id='userName'
          label='Tài khoản'
          required
          error={error?.message}
          placeholder='Nhập tài khoản'
        />
      )}
    </FormControl>

    <FormControl name='email'>
      {({ field, fieldState: { error } }) => (
        <Input
          {...field}
          id='email'
          label='Email'
          type='email'
          required
          error={error?.message}
          placeholder='Nhập Email'
        />
      )}
    </FormControl>

    <FormControl name='fullName'>
      {({ field, fieldState: { error } }) => (
        <Input
          {...field}
          id='fullName'
          label='Họ tên'
          required
          error={error?.message}
          placeholder='Nhập họ tên'
        />
      )}
    </FormControl>

    <FormControl name='phone'>
      {({ field, fieldState: { error } }) => (
        <Input
          {...field}
          id='phone'
          label='Số điện thoại'
          required
          error={error?.message}
          placeholder='Nhập số điện thoại'
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

    <ButtonSubmitControl isLoading={isLoading} btnSubmitText={btnSubmit} />
  </FormProviderContainer>
);

export default Register;
