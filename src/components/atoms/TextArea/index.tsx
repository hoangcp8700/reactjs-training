import clsx from "clsx";
import React, { forwardRef } from "react";
import STYLES from "styles";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  id: string;
  label?: string;
}

const TextAreaRef: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  { id, label, required, disabled, className, ...props },
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
      <textarea
        ref={ref}
        className={clsx(
          STYLES.MIXINS.resetInput,
          "bg-white bg-clip-border border border-solid !border-gray-300 resize-none w-full rounded-lg p-3 focus:border-blue-600",
          disabled && "cursor-not-allowed opacity-50",
          className,
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
