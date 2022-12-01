import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { CONSTANT_LANGUAGE_LIST, DEFAULT_QUERY_OPTION } from "utils/constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "store";
import Loading from "components/atoms/Loading";
import Layout from "components/common/Layout";
import { CONSTANT_ROUTE } from "routes/constants";
import RedirectError from "routes/RedirectError";

const NewsDetailPage = React.lazy(() => import("pages/NewsDetail"));
const ProductDetailPage = React.lazy(() => import("pages/ProductDetail"));
const HomePage = React.lazy(() => import("pages/Home"));
const PageNavigation = React.lazy(() => import("routes/PageNavigation"));

const App = () => (
  <Suspense fallback={<Loading fullScreen />}>
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        {CONSTANT_LANGUAGE_LIST?.map((ele, index) => {
          const prefix = ele.toLowerCase();
          return (
            <Route key={`route-${index.toString()}`} path={prefix === "vi" ? "" : prefix}>
              <Route index element={<HomePage />} />
              <Route path=':slug' element={<PageNavigation />} />
              {/* // page detail */}
              <Route
                path={`${CONSTANT_ROUTE[ele].PRODUCT_DETAIL}/:slug`}
                element={<ProductDetailPage />}
              />
              <Route
                path={`${CONSTANT_ROUTE[ele].NEWS_DETAIL}/:slug`}
                element={<NewsDetailPage />}
              />
            </Route>
          );
        })}

        <Route path='*' element={<RedirectError />} />
      </Route>
    </Routes>
  </Suspense>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: DEFAULT_QUERY_OPTION,
  },
});

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);

export default AppWrapper;
