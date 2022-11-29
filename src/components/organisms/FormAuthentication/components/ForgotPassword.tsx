import { yupResolver } from "@hookform/resolvers/yup";
import Input from "components/atoms/Input";
import FormProviderContainer, {
  ButtonSubmitControl,
  FormControl,
} from "components/molecules/FormProvider";
import React from "react";
import { useForm } from "react-hook-form";
import { forgotPasswordSchema } from "utils/schemas";

export interface ForgotPasswordFormProps {
  email: string;
}

interface IProps {
  btnSubmit: string;
  handleSubmit: (form: ForgotPasswordFormProps) => void;
}

const ForgotPassword: React.FC<IProps> = ({ btnSubmit, handleSubmit }) => {
  const method = useForm<ForgotPasswordFormProps>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(forgotPasswordSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: ForgotPasswordFormProps) => {
    try {
      await handleSubmit(data);
      method.reset();
    } catch (error) {
      console.log("error submit form ForgotPassword", error);
    }
  };

  return (
    <FormProviderContainer method={method} onSubmit={onSubmit} id='form-forgot-password'>
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
};

export default ForgotPassword;
