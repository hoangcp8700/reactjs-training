import clsx from "clsx";
import React, { forwardRef } from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  id: string;
  label?: string;
}

const TextAreaRef: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  { id, name, label, required, rows, placeholder, value, disabled, ...props },
  ref,
) => (
  <div className='relative'>
    {label && (
      <div className='text-base text-black'>
        <label htmlFor={id}>{label}</label>
        {required && <span className='ml-1 text-red-500 font-medium'>*</span>}
      </div>
    )}
    <div className='relative mt-2'>
      <textarea
        ref={ref}
        className={clsx(
          "text-black resize-none transition-shadow w-full rounded-md pl-5 py-3 pr-3 shadow-primary focus:shadow-primaryInner focus:outline-none",
          disabled && "cursor-not-allowed opacity-50",
        )}
        disabled={disabled}
        {...props}
      />
    </div>
  </div>
);
const TextArea = forwardRef(TextAreaRef);

export default TextArea;

// Storybook
//  label: {
//       control: {
//         type: 'text',
//       },
//       defaultValue: 'Label',
//     },
//     rows: {
//       control: {
//         type: 'text',
//       },
//       defaultValue: '4',
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
//     placeholder: {
//       control: {
//         type: 'text',
//       },
//       defaultValue: 'Dummy text',
//     },
//   },
