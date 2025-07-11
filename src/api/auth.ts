import axiosInstance from "./instance";
import { API_SUFFIXS } from "./suffix";

interface LoginParams {
   email: string;
   password: string;
}

interface RegisterParams extends LoginParams {
   username: string;
   gender: string;
   age: number;
}

export const login = async (loginData: LoginParams) => {
   const { data } = await axiosInstance.post(API_SUFFIXS.AUTH.LOGIN, loginData);

   return data;
};

export const register = async (registerData: RegisterParams) => {
   const { data } = await axiosInstance.post(API_SUFFIXS.AUTH.REGISTER, registerData);

   return data;
};
