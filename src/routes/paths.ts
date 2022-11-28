/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { lazy } from "react";
import { CONSTANT_ROUTE } from "utils/constants";

const AboutUs = lazy(() => import("pages/AboutUs"));
const Login = lazy(() => import("pages/Login"));
const Cart = lazy(() => import("pages/Cart"));
const Home = lazy(() => import("pages/Home"));

interface RoutePathItemProps {
  paths: string[];
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  private?: boolean;
}

interface RoutePathWrapProps extends RoutePathItemProps {
  nested: RoutePathItemProps[];
}

export interface RoutePathSProps extends Record<string, RoutePathWrapProps> {}
export interface RouteAuthPathSProps extends Record<string, RoutePathItemProps> {}

const PATHS: RoutePathSProps = {
  // ['about-us', 've-chung-toi']
  ABOUT_US: {
    paths: [CONSTANT_ROUTE.EN.ABOUT_US, CONSTANT_ROUTE.VI.ABOUT_US],
    component: AboutUs,
    nested: [],
  },
  HOME: {
    paths: [""],
    component: Home,
    nested: [],
  },
  LOGIN: {
    paths: [""],
    component: Login,
    private: true,
    nested: [],
  },
  CART: {
    paths: [CONSTANT_ROUTE.EN.CART, CONSTANT_ROUTE.VI.CART],
    component: Cart,
    nested: [
      {
        paths: [":slug"],
        component: Cart,
      },
    ],
  },
};

export const PATHS_AUTH: RouteAuthPathSProps = {
  LOGIN: {
    paths: [CONSTANT_ROUTE.EN.LOGIN, CONSTANT_ROUTE.VI.LOGIN],
    component: Login,
    private: true,
  },
  REGISTER: {
    paths: [CONSTANT_ROUTE.EN.REGISTER, CONSTANT_ROUTE.VI.REGISTER],
    component: Login,
    private: false,
  },
  FORGOT_PASSWORD: {
    paths: [CONSTANT_ROUTE.EN.FORGOT_PASSWORD, CONSTANT_ROUTE.VI.FORGOT_PASSWORD],
    component: Login,
    private: false,
  },
  RESET_PASSWORD: {
    paths: [CONSTANT_ROUTE.EN.RESET_PASSWORD, CONSTANT_ROUTE.VI.RESET_PASSWORD],
    component: Login,
    private: true,
  },
  VERIFY: {
    paths: [CONSTANT_ROUTE.EN.VERIFY, CONSTANT_ROUTE.VI.VERIFY],
    component: Login,
    private: true,
  },
};
export default PATHS;
