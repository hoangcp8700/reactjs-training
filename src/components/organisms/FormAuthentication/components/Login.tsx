import { LoginFormProps } from "api/authentication/type";
import Input from "components/atoms/Input";
import Link from "components/atoms/Link";
import Text from "components/atoms/Text";
import FormProviderContainer, {
  ButtonSubmitControl,
  FormControl,
} from "components/molecules/FormProvider";
import React from "react";
import { CONSTANT_ROUTE } from "routes/constants";
import { baseSlug } from "utils/functions";

import { LayoutAuthenticationProps } from "./Layout";

const Login: React.FC<LayoutAuthenticationProps<LoginFormProps>> = ({
  onSubmit,
  methods,
  btnSubmit,
}) => (
  <FormProviderContainer method={methods} onSubmit={onSubmit} id='form-login'>
    <FormControl name='user'>
      {({ field, fieldState: { error } }) => (
        <Input
          {...field}
          id='user'
          label='Tài khoản'
          required
          error={error?.message}
          placeholder='Nhập số điện thoại hoặc email'
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

    <ButtonSubmitControl btnSubmitText={btnSubmit}>
      <div className='mb-1.5 text-right'>
        <Link href={baseSlug(CONSTANT_ROUTE.VI.FORGOT_PASSWORD, true)}>
          <Text className='text-sm text-red-500'>Quên mật khẩu?</Text>
        </Link>
      </div>
    </ButtonSubmitControl>
  </FormProviderContainer>
);

export default Login;
