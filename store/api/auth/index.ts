import { handleApiError } from "@/utils";
import { axiosClient } from "../axios";

export const loginUserApi = async (data: any) => {
  try {
    const response = await axiosClient.post("/auth/login", data);
    return response.data;
  } catch (error: any) {
    handleApiError(error);
  }
};

export const registerUserApi = async (data: any) => {
  try {
    const response = await axiosClient.post("/auth/register", data);
    return response.data;
  } catch (error: any) {
    handleApiError(error);
  }
};

export const getUserInfoApi = async () => {
  try {
    const response = await axiosClient.get("/auth/getUser");
    return response.data;
  } catch (error: any) {
    handleApiError(error);
  }
};
export const logoutUser = async () => {
  try {
    const response = await axiosClient.get("/auth/logout");
    return response.data;
  } catch (error: any) {
    handleApiError(error);
  }
};
