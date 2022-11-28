import clsx from "clsx";
import React from "react";

import Icon from "../Icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  loading?: boolean;
  size?: "default" | "md" | "lg";
  variants?: "default" | "primary" | "secondary" | "outlined" | "contained" | "icon" | "none";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  size = "default",
  variants = "outlined",
  loading,
  children,
  disabled,
  fullWidth,
  className,
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type || "button"}
    className={clsx(
      "relative flex items-center justify-items-center overflow-hidden text-base transition-all outline-none",
      variants !== "none" && "rounded-md px-3 sm:px-4 shadow-lg",
      variants === "default" && "bg-gray-200 shadow-primary focus:shadow-primaryInner",
      variants === "primary" && "bg-blue-500",
      variants === "secondary" && "bg-red-500",
      variants === "contained" && "rounded-none",
      size === "default" && "py-2",
      size === "md" && "py-3",
      size === "lg" && "py-3 sm:py-3",
      fullWidth && "w-full",
      disabled && "pointer-events-none bg-gray-300 shadow-inner text-gray-500",
      className,
    )}
  >
    {children}
    {loading && (
      <div className='ml-2'>
        <Icon iconName='loading' size='18' />
      </div>
    )}
  </button>
);
export default Button;

// Storybook
//  argTypes: {
//     loading: {
//       control: {
//         type: 'boolean',
//       },
//       defaultValue: false,
//     },
//     disabled: {
//       control: {
//         type: 'boolean',
//       },
//       defaultValue: false,
//     },
//     fullWidth: {
//       control: {
//         type: 'boolean',
//       },
//       defaultValue: false,
//     },
//     variants: {
//       control: {
//         type: 'select',
//         options: ['default', 'primary', 'secondary', 'outlined', 'contained'],
//       },
//       defaultValue: 'outlined',
//     },
//     size: {
//       control: {
//         type: 'select',
//         options: ['default', 'md', 'lg'],
//       },
//       defaultValue: 'default',
//     },
//   },
