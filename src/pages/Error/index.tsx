import Error, { ErrorProps } from "components/templates/Error";
import React from "react";

interface ErrorPageProps extends ErrorProps {}

const ErrorPage: React.FC<ErrorPageProps> = (props) => (
  <div className='p-error'>
    <Error {...props} />
  </div>
);

export default ErrorPage;
