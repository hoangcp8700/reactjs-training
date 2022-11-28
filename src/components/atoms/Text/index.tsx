import clsx from "clsx";
import React, { useMemo } from "react";

interface TextProps {
  type?: "p" | "span" | "div";
  content?: string;
  children?: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ type = "p", content, children, className }) => {
  const Element = type;
  const styleDefault = useMemo(() => "", []);

  return content ? (
    <Element
      className={clsx(styleDefault, className)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  ) : (
    <Element className={clsx(styleDefault, className)}>{children}</Element>
  );
};

Text.defaultProps = {};

export default Text;
