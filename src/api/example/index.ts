import axiosInstance from "api/common";

import { ExampleProps } from "./type";

export const getExampleService = async (): Promise<ExampleProps> => {
  const response = await axiosInstance.get("/example");
  return response.data.data;
};

const ExampleAPI = {
  GET_LIST: async (): Promise<ExampleProps> => {
    const response = await axiosInstance.get("/example");
    return response.data.data;
  },
};

export default ExampleAPI;
