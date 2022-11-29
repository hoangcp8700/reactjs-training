import { yupResolver } from "@hookform/resolvers/yup";
import Input from "components/atoms/Input";
import FormProviderContainer, {
  ButtonSubmitControl,
  FormControl,
} from "components/molecules/FormProvider";
import React from "react";
import { useForm } from "react-hook-form";
import { verifySchema } from "utils/schemas";

export interface VerifyFormProps {
  code: string;
}

interface IProps {
  btnSubmit: string;
  handleSubmit: (form: VerifyFormProps) => void;
}

const Verify: React.FC<IProps> = ({ btnSubmit, handleSubmit }) => {
  const method = useForm<VerifyFormProps>({
    defaultValues: {
      code: "",
    },
    resolver: yupResolver(verifySchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: VerifyFormProps) => {
    try {
      await handleSubmit(data);
      method.reset();
    } catch (error) {
      console.log("error submit form Verify", error);
    }
  };

  return (
    <FormProviderContainer method={method} onSubmit={onSubmit} id='form-verify'>
      <FormControl name='code'>
        {({ field, fieldState: { error } }) => (
          <Input
            {...field}
            id='code'
            label='Code'
            required
            error={error?.message}
            placeholder='Nhập code'
          />
        )}
      </FormControl>

      <ButtonSubmitControl btnSubmitText={btnSubmit} />
    </FormProviderContainer>
  );
};

export default Verify;
