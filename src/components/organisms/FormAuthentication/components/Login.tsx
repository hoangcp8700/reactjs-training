import { yupResolver } from "@hookform/resolvers/yup";
import Input from "components/atoms/Input";
import Link from "components/atoms/Link";
import Text from "components/atoms/Text";
import FormProviderContainer, {
  ButtonSubmitControl,
  FormControl,
} from "components/molecules/FormProvider";
import React from "react";
import { useForm } from "react-hook-form";
import { CONSTANT_ROUTE } from "routes/constants";
import { baseSlug } from "utils/functions";
import { loginSchema } from "utils/schemas";

export interface LoginFormProps {
  user: string;
  password: string;
}

interface IProps {
  handleSubmit: (form: LoginFormProps) => void;
  btnSubmit: string;
}

const Login: React.FC<IProps> = ({ handleSubmit, btnSubmit }) => {
  const method = useForm<LoginFormProps>({
    defaultValues: {
      user: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: LoginFormProps) => {
    try {
      await handleSubmit(data);
      method.reset();
    } catch (error) {
      console.log("error submit form Login", error);
    }
  };

  return (
    <FormProviderContainer method={method} onSubmit={onSubmit} id='form-login'>
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
};

export default Login;
