import { toast } from "@/components/ui/use-toast";
import axios, { AxiosError } from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});
// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error: any) => {
//     const errorMessage = error.response?.data?.message || "An error occurred";
//     toast({
//       title: "Error",
//       description: errorMessage,
//       variant: "destructive",
//     });
//     return Promise.reject(error);
//   },
// );
