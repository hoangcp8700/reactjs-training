/* eslint-disable react/button-has-type */
import clsx from "clsx";
import React from "react";
import STYLES from "styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: "default" | "md" | "lg";
  variants?: "default" | "primary" | "secondary" | "outlined" | "contained";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  size = "default",
  variants = "outlined",
  children,
  disabled,
  fullWidth,
  className,
  ...props
}) => (
  <button
    type={type || "button"}
    className={clsx(
      "relative flex adjust-flex-center overflow-hidden text-base leading-tight transition-all px-5 sm:px-8 rounded-md shadow-lg focus:ring-0",
      STYLES.MIXINS.resetButton,
      variants === "default" && "bg-gray-200 shadow-primary hover:shadow-primaryInner",
      variants === "primary" && "bg-blue-500 hocus:bg-blue-700 active:bg-blue-800",
      variants === "secondary" && "bg-red-500 hocus:bg-red-700  active:bg-red-800",
      variants === "contained" && "rounded-none",
      variants === "outlined" && "border border-gray-200",
      size === "lg" && "h-[48px] sm:h-[56px]",
      size === "md" && "h-[40px] sm:h-[48px]",
      size === "default" && "h-[40px]",
      fullWidth && "w-full",
      disabled &&
        "bg-gray-300 shadow-inner text-gray-500 cursor-not-allowed opacity-70 hover:!bg-gray-700",
      className,
    )}
    disabled={disabled}
    {...props}
  >
    {children}
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
