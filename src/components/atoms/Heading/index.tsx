import clsx from "clsx";
import React, { useMemo } from "react";

interface HeadingProps {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  content?: string;
  children?: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ type = "h2", children, content, className }) => {
  const Element = type;
  const styleDefault = useMemo(() => "leading-tight test-3xl sm:text-5xl", []);

  return content ? (
    <Element
      className={clsx(styleDefault, className)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  ) : (
    <Element className={clsx(styleDefault, className)}>{children}</Element>
  );
};

export default Heading;