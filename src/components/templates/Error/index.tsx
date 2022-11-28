import React from "react";

export interface ErrorProps {
  statusCode: number;
  title: string;
  subTitle?: string;
  redirect?: LinkType;
}

const Error: React.FC<ErrorProps> = ({ title, subTitle, statusCode }) => (
  <div>
    {title}
    {subTitle}
    {statusCode}
  </div>
);

export default Error;
