import axios from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

const getFeaturedProducts = async () => {
  const response = await axios.get(`/products/featured`);
  return response.data;
}

export const useFeaturedproducts = () => {
  return useQuery({
    queryKey: ['featured-products'],
    queryFn: () => getFeaturedProducts(),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}

const getProducts = async () => {
  const response = await axios.get(`/products`);
  return response.data;
}

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}

const getProductsByCategoryId = async (id: number) => {
  const response = await axios.get(`/products/category/${id}`);
  return response.data;
}

export const useGetProductsByCategoryId = (id: number) => {
  return useQuery({
    queryKey: [`product-category-${id}`],
    queryFn: () => getProductsByCategoryId(id),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
