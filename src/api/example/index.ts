import axiosInstance from "api/common";

import { ExampleProps } from "./type";

const ExampleAPI = {
  GET_LIST: async (): Promise<ExampleProps> => {
    const response = await axiosInstance.get("/example");
    return response.data.data;
  },
};

export default ExampleAPI;
