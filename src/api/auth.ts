import axiosInstance from "./instance";
import { API_SUFFIXS } from "./suffix";

interface LoginParams {
   email: string;
   password: string;
}

interface RegisterParams extends LoginParams {
   username: string;
}

export const login = async ({ email, password }: LoginParams) => {
   const { data } = await axiosInstance.post(API_SUFFIXS.AUTH.LOGIN, { email, password });

   return data;
};

export const register = async (registerData: RegisterParams) => {
   const { data } = await axiosInstance.post(API_SUFFIXS.AUTH.REGISTER, registerData);

   return data;
};
