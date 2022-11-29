import React from "react";
import styled from "@emotion/styled";
import clsx from "clsx";
import STYLES from "styles";

interface TextFadeEllipsisProps {
  lineHeight?: number;
  line?: number;
  bgColor?: string;
  className?: string;
  children: React.ReactNode;
}
export const Component = styled.div<TextFadeEllipsisProps>`
  max-height: ${(props) =>
    props?.lineHeight && props.line && STYLES.FUNCTIONS.rem(props.lineHeight * props.line)};
  &:before {
    content: "";
    position: absolute;
    height: ${(props) => props?.lineHeight && STYLES.FUNCTIONS.rem(props.lineHeight)};
    width: 50%;
    bottom: 0;
    right: 0;
    background: ${(props) => `linear-gradient(to right, transparent, ${props.bgColor} 80%)`};
  }
`;

const TextFadeEllipsis: React.FC<TextFadeEllipsisProps> = ({
  className,
  children,
  lineHeight = 24,
  line = 1,
  bgColor = "white",
}) => (
  <Component
    bgColor={bgColor}
    lineHeight={lineHeight}
    line={line}
    className={clsx("relative overflow-hidden", className)}
  >
    {children}
  </Component>
);

export default TextFadeEllipsis;
