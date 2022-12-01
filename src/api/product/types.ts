export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductParamType {
  limit?: number;
  skip?: string;
  select?: string;
  page?: number;
}

export type APIPaginationResponse<T> = {
  products: T;
  total: number;
  skip: number;
  limit: number;
};
