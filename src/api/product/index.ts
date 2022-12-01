import axiosInstance from "api/common";

import { APIPaginationResponse, ProductParamType, ProductType } from "./types";

const ProductAPI = {
  GET_LIST: async (params?: ProductParamType): Promise<APIPaginationResponse<ProductType[]>> => {
    const res = await axiosInstance.get("https://dummyjson.com/products", { params });
    return res.data;
  },
  GET_DETAIL: async (id: string): Promise<ProductType> => {
    const res = await axiosInstance.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  },
  GET_LIST_BY_CATEGORY: async (slug: string): Promise<ProductType[]> => {
    const res = await axiosInstance.get(`https://dummyjson.com/products/category/${slug}`);
    return res.data;
  },
};

export default ProductAPI;
