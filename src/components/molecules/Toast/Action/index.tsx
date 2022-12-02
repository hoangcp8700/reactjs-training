import Button, { ButtonProps } from "components/atoms/Button";
import React from "react";

interface ActionButtonProps {
   children: React.ReactNode;
    props?: ButtonProps;
    onClick: () => void;
}

interface ActionToastProps {
  primaryBtn?: ActionButtonProps;
  secondaryBtn?: ActionButtonProps;
}

const ActionToast: React.FC<ActionToastProps> = ({ primaryBtn, secondaryBtn }) => (
  <div className='flex items-center mt-2'>
    {primaryBtn && (
      <Button {...primaryBtn.props} onClick={primaryBtn.onClick}>
        {primaryBtn.children}
      </Button>
    )}
    {secondaryBtn && (
      <Button {...secondaryBtn.props} onClick={secondaryBtn.onClick}>
        {secondaryBtn.children}
      </Button>
    )}
  </div>
);

export default ActionToast;
