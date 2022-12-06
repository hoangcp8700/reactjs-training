/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { lazy } from "react";

import { CONSTANT_ROUTE } from "./constants";

const AboutUs = lazy(() => import("pages/Test"));
const Cart = lazy(() => import("pages/Cart"));

// ------- authentication page --------------
const Logout = lazy(() => import("pages/Authentication/Logout"));
const Login = lazy(() => import("pages/Authentication/Login"));
const Register = lazy(() => import("pages/Authentication/Register"));
const ForgotPassword = lazy(() => import("pages/Authentication/ForgotPassword"));
const ResetPassword = lazy(() => import("pages/Authentication/ResetPassword"));

export interface TemplateRouteProps {
  paths: string[];
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  private: boolean;
  isLogin?: boolean; // check page login != page other || login != carts
}
// eg: ['about-us', 've-chung-toi']
const TEMPLATE_PAGE: TemplateRouteProps[] = [
  {
    paths: [CONSTANT_ROUTE.EN.ABOUT_US, CONSTANT_ROUTE.VI.ABOUT_US],
    component: AboutUs,
    private: false,
  },
  {
    paths: [CONSTANT_ROUTE.EN.CART, CONSTANT_ROUTE.VI.CART],
    component: Cart,
    private: true,
  },
  // authentication
  {
    paths: [CONSTANT_ROUTE.EN.LOGOUT, CONSTANT_ROUTE.VI.LOGOUT],
    component: Logout,
    private: false,
  },
  {
    paths: [CONSTANT_ROUTE.EN.LOGIN, CONSTANT_ROUTE.VI.LOGIN],
    component: Login,
    private: false,
    isLogin: true,
  },
  {
    paths: [CONSTANT_ROUTE.EN.REGISTER, CONSTANT_ROUTE.VI.REGISTER],
    component: Register,
    private: false,
  },
  {
    paths: [CONSTANT_ROUTE.EN.FORGOT_PASSWORD, CONSTANT_ROUTE.VI.FORGOT_PASSWORD],
    component: ForgotPassword,
    private: false,
  },
  {
    paths: [CONSTANT_ROUTE.EN.RESET_PASSWORD, CONSTANT_ROUTE.VI.RESET_PASSWORD],
    component: ResetPassword,
    private: false,
  },
];
export default TEMPLATE_PAGE;
