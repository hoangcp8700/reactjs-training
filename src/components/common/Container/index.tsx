import clsx from "clsx";
import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
  fullScreen?: boolean;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ fullScreen, className, children }) => (
  <section
    className={clsx(
      "mx-auto px-4 xl:px-6 2xl:px-28 2xl:max-w-screen-2xl",
      fullScreen && "px-0",
      className,
    )}
  >
    {children}
  </section>
);

export default Container;
