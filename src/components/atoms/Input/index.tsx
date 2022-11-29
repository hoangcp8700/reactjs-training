import clsx from "clsx";
import React, { forwardRef } from "react";
import STYLES from "styles";

import Icon from "../Icon";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "number" | "email" | "password";
  id: string;
  label?: string;
  error?: string;
  isSearch?: boolean;
}

const InputRef: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type = "text", label, id, error, disabled, isSearch = false, required, className, ...props },
  ref,
) => (
  <div className='relative'>
    {label && (
      <div className='text-base text-white mb-2'>
        <label htmlFor={id}>{label}</label>
        {required && <span className='ml-1 text-red-500 font-medium'>*</span>}
      </div>
    )}
    <div className='relative'>
      <input
        ref={ref}
        type={type}
        className={clsx(
          STYLES.MIXINS.resetInput,
          "m-0 block text-base font-normal text-gray-600 bg-white bg-clip-border border border-solid !border-gray-300 placeholder:text-gray-400 transition-all w-full rounded-lg px-3 py-2 focus:text-gray-700 focus:bg-white focus:border-blue-600",
          isSearch && "pr-12",
          error && "!text-red-500 !border-red-500",
          disabled && "cursor-not-allowed opacity-50",
        )}
        disabled={disabled}
        {...props}
      />
      {isSearch && (
        <div className='absolute -top-1 right-0 translate-y-2/4 -translate-x-2/4'>
          <button type='submit'>
            <Icon iconName='search' size={24} />
          </button>
        </div>
      )}
    </div>
    {error && (
      <div className='mt-1 ml-2'>
        <span className='text-sm text-red-500'>{error}</span>
      </div>
    )}
  </div>
);
const Input = forwardRef(InputRef);

export default Input;
