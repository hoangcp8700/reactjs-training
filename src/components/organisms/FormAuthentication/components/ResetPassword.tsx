import { yupResolver } from "@hookform/resolvers/yup";
import Input from "components/atoms/Input";
import FormProviderContainer, {
  ButtonSubmitControl,
  FormControl,
} from "components/molecules/FormProvider";
import React from "react";
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "utils/schemas";

export interface ResetPasswordFormProps {
  password: string;
  passwordConfirmation: string;
}

interface IProps {
  btnSubmit: string;
  handleSubmit: (form: ResetPasswordFormProps) => void;
}

const ResetPassword: React.FC<IProps> = ({ btnSubmit, handleSubmit }) => {
  const method = useForm<ResetPasswordFormProps>({
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
    resolver: yupResolver(resetPasswordSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: ResetPasswordFormProps) => {
    try {
      await handleSubmit(data);
      method.reset();
    } catch (error) {
      console.log("error submit form ResetPassword", error);
    }
  };

  return (
    <FormProviderContainer method={method} onSubmit={onSubmit} id='form-reset-password'>
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

export default ResetPassword;
