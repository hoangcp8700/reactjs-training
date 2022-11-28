import clsx from "clsx";
import React, { forwardRef } from "react";

import Icon from "../Icon";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "number" | "email" | "password";
  // modifiers?: "primary"; // style
  id: string;
  label?: string;
  error?: string;
  isSearch?: boolean;
}

const InputRef: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type = "text", label, id, error, disabled, isSearch = false, required, ...props },
  ref,
) => (
  <div className='relative'>
    {label && (
      <div className='text-base text-black mb-2'>
        <label htmlFor={id}>{label}</label>
        {required && <span className='ml-1 text-red-500 font-medium'>*</span>}
      </div>
    )}
    <div className='relative'>
      <input
        ref={ref}
        type={type}
        className={clsx(
          "placeholder:text-slate-400 text-black transition-shadow w-full rounded-md pl-5 py-3 pr-3 shadow-primary focus:shadow-primaryInner active:shadow-primaryInner",
          isSearch && "pr-12",
          error && "text-red-500 placeholder:text-red-400",
          disabled && "cursor-not-allowed opacity-50",
        )}
        disabled={disabled}
        {...props}
      />
      {isSearch && (
        <div className='absolute -top-1 right-0 translate-y-2/4 -translate-x-2/4'>
          <button type='submit'>
            <Icon iconName='search' size='24' />
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
