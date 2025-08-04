import axios from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

const getCategories = async () => {
  const response = await axios.get(`/categories`);
  return response.data;
}

export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}

const getCategoryById = async (id: number) => {
  const response = await axios.get(`/categories/${id}`);
  return response.data;
}

export const useGetCategoryById = (id: number) => {
  return useQuery({
    queryKey: [`category-${id}`],
    queryFn: () => getCategoryById(id),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}

const getCategoryProducts = async () => {
  const response = await axios.get(`/categories/categories-product`);
  return response.data;
}

export const useGetCategoriesProducts = () => {
  return useQuery({
    queryKey: ['category-products'],
    queryFn: () => getCategoryProducts(),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}