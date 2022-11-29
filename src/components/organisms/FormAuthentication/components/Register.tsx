import { yupResolver } from "@hookform/resolvers/yup";
import Input from "components/atoms/Input";
import FormProviderContainer, {
  ButtonSubmitControl,
  FormControl,
} from "components/molecules/FormProvider";
import React from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "utils/schemas";

export interface RegisterFormProps {
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface IProps {
  btnSubmit: string;
  handleSubmit: (form: RegisterFormProps) => void;
}

const Register: React.FC<IProps> = ({ btnSubmit, handleSubmit }) => {
  const method = useForm<RegisterFormProps>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: yupResolver(registerSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: RegisterFormProps) => {
    try {
      await handleSubmit(data);
      method.reset();
    } catch (error) {
      console.log("error submit form register", error);
    }
  };

  return (
    <FormProviderContainer method={method} onSubmit={onSubmit} id='form-register'>
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
};

export default Register;
