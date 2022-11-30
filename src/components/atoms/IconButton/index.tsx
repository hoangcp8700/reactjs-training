import clsx from "clsx";
import React from "react";

import Button, { ButtonProps } from "../Button";
import Icon, { IconProps } from "../Icon";
import Link, { LinkProps } from "../Link";

interface IconButtonProps extends IconProps {
  buttonProps?: ButtonProps;
  linkProps?: LinkProps;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ className, linkProps, buttonProps, ...props }) => {
  if (linkProps) {
    return (
      <div className={className}>
        <Button {...buttonProps} className={clsx("!px-3 rounded-full", buttonProps?.className)}>
          <Link {...linkProps}>
            <Icon {...props} />
          </Link>
        </Button>
      </div>
    );
  }
  return (
    <div className={className}>
      <Button {...buttonProps} className={clsx("!px-3 rounded-full", buttonProps?.className)}>
        <Icon {...props} />
      </Button>
    </div>
  );
};

export default IconButton;
