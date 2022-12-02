import axiosInstance from "api/common";
import { proxyAPI } from "utils/constants";
import { getKeyValue } from "utils/functions";

import { AuthProfileProps, LoginFormProps, LoginSuccessProps, RegisterFormProps } from "./type";

const concatAuth = (slug: string) => `${proxyAPI}${slug}`;

// eslint-disable-next-line consistent-return
export const fakeLogin = (data: LoginFormProps) => {
  if (data.userName === "admin" && data.password === "123") {
    return {
      data: {
        accessToken: "123123123112312312321",
      },
      message: {
        VI: "Đăng nhập thành công",
        EN: "Login success",
      },
    };
  }
};
const AuthenticateAPI = {
  PROFILE: async (): Promise<AuthProfileProps> => {
    const response = await axiosInstance.get(concatAuth("/auth/user"));
    return response.data.data;
  },
  LOGIN: async (data: LoginFormProps): Promise<ResponseAPIType<LoginSuccessProps>> => {
    // fakeLogin(data);

    const formData = new FormData();

    Object.keys(data).forEach((ele) => {
      formData.append(ele, getKeyValue<LoginFormProps>(ele as keyof LoginFormProps, data));
    });
    const response = await axiosInstance.post(concatAuth("/auth/login"), formData);
    return response.data;
  },

  REGISTER: async (data: RegisterFormProps): Promise<void> => {
    const { passwordConfirmation, ...rest } = data;
    const formData = new FormData();

    Object.keys(rest).forEach((ele) => {
      formData.append(
        ele,
        getKeyValue<Omit<RegisterFormProps, "passwordConfirmation">>(
          ele as keyof Omit<RegisterFormProps, "passwordConfirmation">,
          rest,
        ),
      );
    });
    const response = await axiosInstance.post(concatAuth("/auth/register"), formData);
    return response.data;
  },
};

export default AuthenticateAPI;
