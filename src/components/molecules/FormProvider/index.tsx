/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from "react";
import { Controller, FormProvider, UseFormReturn } from "react-hook-form";
import clsx from "clsx";
import Button from "components/atoms/Button";
import Text from "components/atoms/Text";
import { ERROR_GENERAL } from "utils/constants";
import Icon from "components/atoms/Icon";

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
  isLoading?: boolean;
}

export const ButtonSubmitControl: React.FC<ButtonSubmitControlProps> = ({
  btnSubmitText,
  children,
  isLoading,
}) => (
  <div className='ml-auto mt-5 w-fit'>
    {children}
    <Button type='submit' variants='primary' className='ml-auto min-w-[150px]' disabled={isLoading}>
      {isLoading && <Icon iconName='loading' size={24} />}
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
    {method.formState.errors && method.formState.errors[ERROR_GENERAL] && (
      <div className='adjust-flex-center mb-4'>
        <Text className='text-sm !text-red-500 font-medium'>
          {method.formState.errors[ERROR_GENERAL].message?.toString()}
        </Text>
      </div>
    )}
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
