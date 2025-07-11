import type { LoginParams, RegisterParams } from "@/types";

import axiosInstance from "./instance";
import { API_SUFFIXS } from "./suffix";

export const login = async (loginData: LoginParams) => {
   const { data } = await axiosInstance.post(API_SUFFIXS.AUTH.LOGIN, loginData);

   return data;
};

export const register = async (registerData: RegisterParams) => {
   const { data } = await axiosInstance.post(API_SUFFIXS.AUTH.REGISTER, registerData);

   return data;
};
