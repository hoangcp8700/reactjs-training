import React, { useMemo } from "react";
import styled from "@emotion/styled";

import ICON_LISTS from "./constants";

interface IconStyleProps {
  size?: number;
}
export interface IconProps extends IconStyleProps {
  iconName: IconName;
  className?: string;
}

export type IconName = keyof typeof ICON_LISTS;

const Icon: React.FC<IconProps> = ({ iconName, size = 24, className }) => {
  const Component = useMemo(() => ICON_LISTS[iconName], [iconName]);

  const IconWrapper = styled(Component)<IconStyleProps>(
    (props) =>
      props?.size && {
        fontSize: props?.size,
        width: props?.size,
        height: props?.size,
      },
  );
  return (
    <IconWrapper className={className} style={{ fontSize: size, width: size, height: size }} />
  );
};

export default Icon;
