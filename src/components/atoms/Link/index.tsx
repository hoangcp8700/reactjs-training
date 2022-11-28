import React from "react";
import { NavLink as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

export interface LinkProps extends Omit<RouterLinkProps, "to"> {
  href?: string;
  search?: string;
  useExternal?: boolean;
}

const Link: React.FC<LinkProps> = ({ children, href, search, useExternal, ...props }) => {
  if (!href) return <span {...props}>{children}</span>;

  if (href.includes("http") || useExternal) {
    return (
      <a {...props} href={href} rel='noreferrer'>
        {children}
      </a>
    );
  }

  return (
    <RouterLink
      {...props}
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
