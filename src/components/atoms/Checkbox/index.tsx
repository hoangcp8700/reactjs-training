import clsx from "clsx";
import React, { forwardRef } from "react";
import STYLES from "styles";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  isLabelLeft?: boolean;
  error?: boolean;
  sizes?: "sm" | "md";
  onChange?: () => void;
}

const CheckboxRef: React.ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (
  { label, isLabelLeft, error, disabled, checked, sizes = "sm", onChange, ...props },
  ref,
) => (
  <div
    aria-hidden
    className={clsx(
      "flex items-center w-fit gap-x-2 text-black cursor-pointer",
      error && "text-red-500",
      disabled && "text-gray-500 pointer-events-none",
    )}
    onClick={() => onChange && onChange()}
  >
    {label && isLabelLeft && <span className='text-base text-inherit ml-2'>{label}</span>}

    <input
      ref={ref}
      type='checkbox'
      className={clsx(
        STYLES.MIXINS.resetInput,
        "bg-white !border-gray-400 rounded-sm hover:shadow-sm hover:bg-gray-200 disabled:bg-gray-300",
        checked && "animate-[tick_150ms_ease-in-out]",
        sizes === "sm" && "p-2",
        sizes === "md" && "p-3",
        error &&
          "bg-red-700 hover:bg-red-500 checked:bg-red-700 checked:hover:bg-red-700 checked:focus:bg-red-600",
      )}
      disabled={disabled}
      checked={checked}
      onChange={() => onChange && onChange()}
      {...props}
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
