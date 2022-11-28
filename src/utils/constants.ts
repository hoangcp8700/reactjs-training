export const IMAGE_DUMMY = "https://source.unsplash.com/random";
export const VIDEO_DUMMY =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export const LOCAL_STORAGE = {
  AUTHENTICATE: "AUTHENTICATE",
  THEME: "THEME",
};

export const THEME_MODE_OPTIONS = {
  darkMode: "darkMode",
  lightMode: "lightMode",
};

export const ACCEPT_FILE_IMAGE = ["image/png", "image/jpeg"];

export const CONSTANT_ROUTE = {
  EN: {
    HOME: "",
    CATEGORY: "categories",
    CART: "carts",
    ABOUT_US: "about-us",
    LOGIN: "login",
    REGISTER: "register",
    FORGOT_PASSWORD: "forgot-password",
    RESET_PASSWORD: "reset-password",
    VERIFY: "verify",
  },
  VI: {
    HOME: "",
    CATEGORY: "danh-muc",
    CART: "gio-hang",
    ABOUT_US: "ve-chung-toi",
    LOGIN: "dang-nhap",
    REGISTER: "dang-ky",
    FORGOT_PASSWORD: "quen-mat-khau",
    RESET_PASSWORD: "cap-nhap-mat-khau",
    VERIFY: "ma-hoa",
  },
};

export const CONSTANT_LANGUAGE_LIST = ["EN", "VI"];

export const DEFAULT_QUERY_OPTION = {
  retry: 0,
  refetchOnMount: true,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
};

export default undefined;
