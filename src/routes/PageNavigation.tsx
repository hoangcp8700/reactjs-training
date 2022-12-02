import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useParams, useSearchParams } from "react-router-dom";
import Error from "pages/Error";
import Loading from "components/atoms/Loading";
import { useAuthenticate } from "context/AuthenticateContext";

import TEMPLATE_PAGE, { RoutePathItemProps } from "./paths";
import { CONSTANT_ROUTE } from "./constants";

// NOTE: important!!!
const langCurrent = "VI";

const PageNavigation: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { slug } = useParams<{ slug: string }>();
  const { isAuth } = useAuthenticate();
  console.log("🚀PageNavigation", isAuth, searchParams, location);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pageData, setPageData] = useState<RoutePathItemProps>();
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (slug) {
      const page = TEMPLATE_PAGE.find((ele) => ele.paths.includes(slug));
      if (page) {
        setPageData(page);
      } else {
        setIsError(true);
      }
      setIsLoading(false);
    }
    return () => {
      setPageData(undefined);
      setIsError(false);
      setIsLoading(true);
    };
  }, [slug]);

  if (isLoading) {
    return <Loading fullScreen />;
  }

  if (isError || !pageData) {
    return <Error statusCode={404} title='Page Not Found' />;
  }

  // page is private + need check authenticate and not login => redirect login
  // ex: Cart page
  if (pageData.private && pageData.authenticate && !isAuth) {
    setSearchParams(location.pathname);
    return <Navigate to={`/${CONSTANT_ROUTE[langCurrent].LOGIN}`} replace />;
  }

  // page is public + need check authenticate and have isAuth => redirect home
  // ex: Login page
  if (!pageData.private && pageData.authenticate && isAuth) {
    return <Navigate to='/' replace />;
  }

  return React.createElement(pageData.component);
};

export default PageNavigation;
