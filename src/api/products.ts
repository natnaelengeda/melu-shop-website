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

const getProductById = async (id: number) => {
  const response = await axios.get(`/products/${id}`);
  return response.data;
}

export const useGetProductById = (id: number) => {
  return useQuery({
    queryKey: [`product-${id}`],
    queryFn: () => getProductById(id),
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

const filterProducts = async (data: any) => {
  const response = await axios.get(`/products/filter-products`, {
    params: {
      product: data.product,
      category: data.category,
      price: data.price,
      sortBy: data.sortBy
    }
  });
  return response.data;
}

export const useFilteredProducts = (data: any) => {
  return useQuery({
    queryKey: ['filtered-products'],
    queryFn: () => filterProducts(data),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    enabled: true,
  });
}