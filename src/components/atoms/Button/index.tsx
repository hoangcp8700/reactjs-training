import clsx from "clsx";
import React from "react";
import STYLES from "styles";

import Icon from "../Icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  loading?: boolean;
  size?: "default" | "md" | "lg";
  variants?: "default" | "primary" | "secondary" | "outlined" | "contained";
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
      "relative flex items-center justify-items-center overflow-hidden text-base transition-all outline-none px-5 sm:px-8 rounded-md shadow-lg disabled:cursor-not-allowed disabled:opacity-70",
      STYLES.MIXINS.resetButton,
      variants === "default" && "bg-gray-200 shadow-primary hover:shadow-primaryInner",
      variants === "primary" && "bg-blue-500",
      variants === "secondary" && "bg-red-500",
      variants === "contained" && "rounded-none",
      variants === "outlined" && "border border-gray-200",
      size === "lg" && "h-[48px] sm:h-[56px]",
      size === "md" && "h-[40px] sm:h-[48px]",
      size === "default" && "h-[40px]",
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
