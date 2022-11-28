import React from "react";
import Error from "components/templates/Error";

interface RedirectErrorProps {}

const RedirectError: React.FC<RedirectErrorProps> = () => {
  const errorCode = 404;
  const messages = "Not Found";

  return <Error statusCode={errorCode} title={messages} />;
};

export default RedirectError;
