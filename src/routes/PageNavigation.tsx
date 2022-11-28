import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "pages/Error";
import Loading from "components/atoms/Loading";

import TEMPLATE_PAGE, { RoutePathItemProps } from "./paths";

const PageNavigation: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pageData, setPageData] = useState<RoutePathItemProps>();
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (slug) {
      const page = TEMPLATE_PAGE.find((ele) => ele.paths.includes(slug));
      if (page) {
        // check private here!!!!
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
    return <Loading />;
  }

  if (isError || !pageData) {
    return <Error statusCode={404} title='Page Not Found' />;
  }

  return React.createElement(pageData.component);
};

export default PageNavigation;
