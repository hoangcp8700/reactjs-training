/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { lazy } from "react";

import { CONSTANT_ROUTE } from "./constants";

const AboutUs = lazy(() => import("pages/AboutUs"));
const Login = lazy(() => import("pages/Login"));
const Cart = lazy(() => import("pages/Cart"));
const NewsDetail = lazy(() => import("pages/NewsDetail"));

export interface RoutePathItemProps {
  paths: string[];
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  private: boolean;
}
// eg: ['about-us', 've-chung-toi']
const TEMPLATE_PAGE: RoutePathItemProps[] = [
  {
    paths: [CONSTANT_ROUTE.EN.ABOUT_US, CONSTANT_ROUTE.VI.ABOUT_US],
    component: AboutUs,
    private: false,
  },
  { paths: [CONSTANT_ROUTE.EN.LOGIN, CONSTANT_ROUTE.VI.LOGIN], component: Login, private: false },
  { paths: [CONSTANT_ROUTE.EN.CART, CONSTANT_ROUTE.VI.CART], component: Cart, private: true },
  {
    paths: [CONSTANT_ROUTE.EN.NEWS_DETAIL, CONSTANT_ROUTE.VI.NEWS_DETAIL],
    component: NewsDetail,
    private: false,
  },
];

export default TEMPLATE_PAGE;
