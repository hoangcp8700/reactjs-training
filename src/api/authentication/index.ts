import axiosInstance from "api/common";
import { proxyAPI } from "utils/constants";
import { getKeyValue } from "utils/functions";

import { AuthProfileProps, LoginFormProps, LoginSuccessProps, RegisterFormProps } from "./type";

const concatAuth = (slug: string) => `${proxyAPI}${slug}`;

// eslint-disable-next-line consistent-return
export const fakeLogin = () => ({
  data: {
    accessToken: "123123123112312312321",
  },
  message: {
    VI: "Đăng nhập thành công",
    EN: "Login success",
  },
});
export const fakeProfile = () => ({
  data: {
    data: {
      avatar: "",
      email: "hoangcp219@gmail.com",
      fullName: "Hoang Cong Phan",
      phone: "09312312312",
      userName: "hoangcp219",
      _id: "12312321321",
    },
  },
});
const AuthenticateAPI = {
  PROFILE: async (): Promise<AuthProfileProps> => {
    const response = fakeProfile();
    // const response = await axiosInstance.get(concatAuth("/auth/user"));
    return response.data.data;
  },
  LOGIN: async (data: LoginFormProps): Promise<ResponseAPIType<LoginSuccessProps>> => {
    return fakeLogin();

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
