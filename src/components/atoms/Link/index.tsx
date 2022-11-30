import clsx from "clsx";
import React, { useMemo } from "react";
import { NavLink as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

export interface LinkProps extends Omit<RouterLinkProps, "to"> {
  href?: string;
  search?: string;
  useExternal?: boolean;
  isDecoration?: boolean;
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  search,
  useExternal,
  isDecoration,
  className,
  ...props
}) => {
  const style = useMemo(
    () =>
      clsx(
        "underline decoration-transparent",
        isDecoration && "hover:decoration-inherit transition duration-300 ease-in-out",
        className,
      ),
    [isDecoration, className],
  );

  if (!href)
    return (
      <span {...props} className={style}>
        {children}
      </span>
    );

  if (href.includes("http") || useExternal) {
    return (
      <a {...props} href={href} rel='noreferrer' className={style}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink
      {...props}
      className={style}
      to={{
        pathname: href,
        search,
      }}
      aria-label='label'
    >
      {children}
    </RouterLink>
  );
};

export default Link;
// Storybook
// Default.args = {
//   // children: <p>Demo</p>
//   text: "Google Link",
//   href: "https://google.com",
//   target: "_blank",
//   className: 'text-red-500',
// };
