import axiosInstance from "services/common/instance";

import { ExampleProps } from "./type";

export const getExampleService = async (): Promise<ExampleProps> => {
  const response = await axiosInstance.get("/example");
  return response.data.data;
};
