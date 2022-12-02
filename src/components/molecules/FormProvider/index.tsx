/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from "react";
import { Controller, FormProvider, UseFormReturn } from "react-hook-form";
import clsx from "clsx";
import Button from "components/atoms/Button";
import Text from "components/atoms/Text";

export interface FormProviderContainerProps {
  id?: string;
  method: UseFormReturn<any>;
  children?: React.ReactNode;
  className?: string;
  onSubmit?: (val?: any) => void;
}
interface FormControlProps {
  name: string;
  className?: string;
  children: (props: any) => any;
}

interface ButtonSubmitControlProps {
  btnSubmitText: string;
  children?: React.ReactNode;
}

export const ButtonSubmitControl: React.FC<ButtonSubmitControlProps> = ({
  btnSubmitText,
  children,
}) => (
  <div className='ml-auto mt-5 w-fit'>
    {children}
    <Button type='submit' variants='primary' className='ml-auto min-w-[150px]'>
      <Text className='text-sm font-semibold !text-white'>{btnSubmitText}</Text>
    </Button>
  </div>
);

export const FormControl: React.FC<FormControlProps> = ({ name, className, children, ...rest }) => (
  <div className={clsx("not-first:mt-3", className)}>
    <Controller
      {...rest}
      name={name}
      render={({ field, fieldState, formState }) => children({ field, fieldState, formState })}
    />
  </div>
);

const FormProviderContainerRef: React.ForwardRefRenderFunction<
  HTMLFormElement,
  FormProviderContainerProps
> = ({ method, id, children, className, onSubmit }, ref) => (
  <FormProvider {...method}>
    <form
      id={id}
      ref={ref}
      onSubmit={method.handleSubmit((val) => onSubmit && onSubmit(val))}
      noValidate
      className={className}
    >
      {children}
    </form>
  </FormProvider>
);

const FormProviderContainer = forwardRef(FormProviderContainerRef);

export default FormProviderContainer;
