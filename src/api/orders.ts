import axios from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

const getOrders = async () => {
  const response = await axios.get('/orders');
  return response.data;
}

export const useGetOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: () => getOrders(),
    staleTime: 5 * 60 * 1000,
  });
}