import Loading from "components/atoms/Loading";
import Layout from "components/common/Layout";
import React, { Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import PATHS from "./paths";
import RedirectError from "./RedirectError";

const Home = React.lazy(() => import("pages/Home"));

const RoutesContainer = () => {
  if (!PATHS) return <Loading fullScreen />;
  return (
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
          <Route index element={<Home />} />

          {Object.keys(PATHS).map((route, routeIdx) => {
            const Component = PATHS[route].component;
            return PATHS[route].paths.map((ele) => (
              <Route
                key={`router-${route}-${routeIdx.toString()}-element-${ele}`}
                path={ele}
                element={<Component />}
              >
                {PATHS[route].nested.length
                  ? PATHS[route].nested.map((nestRoute) => {
                      const NestedComponent = nestRoute.component;
                      return nestRoute.paths.map((nest) => (
                        <Route
                          key={`router-${route}-${routeIdx.toString()}-element-${ele}-nested-${nest}`}
                          index={!nest}
                          path={nest}
                          element={<NestedComponent />}
                        />
                      ));
                    })
                  : undefined}
              </Route>
            ));
          })}
        </Route>
        <Route path='*' element={<RedirectError />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesContainer;
