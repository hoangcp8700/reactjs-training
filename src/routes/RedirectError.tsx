import ErrorPage from "pages/Error";
import React from "react";

interface RedirectErrorProps {}

const RedirectError: React.FC<RedirectErrorProps> = () => (
  <ErrorPage statusCode={404} title='Page Not Found' />
);

export default RedirectError;
