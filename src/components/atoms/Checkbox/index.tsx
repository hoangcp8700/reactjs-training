import clsx from "clsx";
import React, { forwardRef } from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  isLabelLeft?: boolean;
  error?: boolean;
  sizes?: "sm" | "md";
  onClick?: () => void;
}

const CheckboxRef: React.ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (
  {
    label,
    isLabelLeft,
    error,
    disabled,
    placeholder,
    checked,
    name,
    sizes = "sm",
    onClick = () => {},
  },
  ref,
) => (
  <div
    className={clsx(
      "flex items-center w-fit gap-x-2 text-black cursor-pointer",
      error && "text-red-500",
      disabled && "text-gray-500 pointer-events-none",
    )}
    onClick={onClick}
  >
    {label && isLabelLeft && <span className='text-base text-inherit ml-2'>{label}</span>}
    <input
      ref={ref}
      type='checkbox'
      className={clsx(
        "bg-gray-100 text-blue-500 rounded-sm hover:shadow-sm hover:bg-gray-200 disabled:bg-gray-300",
        checked && "animate-[tick_150ms_ease-in] ",
        sizes === "sm" && "p-2",
        sizes === "md" && "p-3",
        error && "border-red-500",
      )}
      disabled={disabled}
      placeholder={placeholder}
      checked={checked}
      name={name}
      onChange={() => onClick()}
    />
    {label && !isLabelLeft && <span className='text-base text-inherit ml-2'>{label}</span>}
  </div>
);
const Checkbox = forwardRef(CheckboxRef);

export default Checkbox;

// Storybook
//  argTypes: {
//     label: {
//       control: {
//         type: 'text',
//       },
//     },
//     disabled: {
//       control: {
//         type: 'boolean',
//         options: [false, true],
//       },
//       defaultValue: false,
//     },
//     required: {
//       control: {
//         type: 'boolean',
//         options: [false, true],
//       },
//       defaultValue: false,
//     },
//     error: {
//       control: {
//         type: 'boolean',
//         options: [false, true],
//       },
//       defaultValue: false,
//     },
//     isLabelLeft: {
//       control: {
//         type: 'boolean',
//         options: [false, true],
//       },
//       defaultValue: false,
//     },
//     sizes: {
//       control: {
//         type: 'select',
//         options: ['sm', 'md'],
//       },
//       defaultValue: 'sm',
//     },
//   },
