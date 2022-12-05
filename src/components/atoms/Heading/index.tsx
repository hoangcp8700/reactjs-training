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
  const styleDefault = useMemo(() => "font-medium m-0 duration-300 ease", []);

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
