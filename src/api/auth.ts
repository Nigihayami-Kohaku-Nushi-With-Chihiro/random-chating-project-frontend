import type { LoginParams, RegisterParams } from "@/types";

import axiosInstance from "./instance";
import { API_SUFFIXS } from "./suffix";

/**
 * Axios 통신으로 로그인 API에 접근하는 함수입니다.
 * @param loginData 로그인 페이지에서 작성된 form 데이터
 * @returns API 응답 데이터
 */
export const login = async (loginData: LoginParams) => {
   const { data } = await axiosInstance.post(API_SUFFIXS.AUTH.LOGIN, loginData);

   return data;
};

/**
 * Axios 통신으로 회원가입 API에 접근하는 함수입니다.
 * @param registerData 회원가입 페이지에서 작성된 form 데이터
 * @returns API 응답 데이터
 */
export const register = async (registerData: RegisterParams) => {
   const { data } = await axiosInstance.post(API_SUFFIXS.AUTH.REGISTER, registerData);

   return data;
};
