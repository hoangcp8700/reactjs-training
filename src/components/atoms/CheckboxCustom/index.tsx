import clsx from "clsx";
import React from "react";
import STYLES from "styles";

interface CheckboxCustomProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  type?: "checkbox" | "radio";
  children: React.ReactNode;
  className?: string;
}

const CheckboxCustom: React.FC<CheckboxCustomProps> = ({
  id,
  type = "checkbox",
  children,
  className,
  ...props
}) => (
  <div className='checkboxCustom w-fit'>
    <label htmlFor={id || `checkbox-${props.name}`}>
      <input
        {...props}
        id={id || `checkbox-${props.name}`}
        className={clsx(STYLES.MIXINS.resetInput, "hidden disabled:cursor-not-allowed opacity-50")}
        type={type}
        hidden
      />
      {/* // custom checkbox */}
      <div
        className={clsx(
          "adjust-flex-center rounded-full cursor-pointer w-9 h-9 overflow-hidden duration-125 ease-in-out",
          className,
        )}
      >
        {children}
      </div>
    </label>
  </div>
);

export default CheckboxCustom;
