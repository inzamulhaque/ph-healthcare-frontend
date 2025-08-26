import { authKey } from "@/constant/authKey";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";
import { JwtPayload } from "jwt-decode";

export interface IDecodedData {
  userId: string;
  role: string;
  email: string;
  iat: number;
  exp: number;
}

export const storeUserInfo = (token: string) => {
  return setToLocalStorage(authKey, token);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const decodedData: JwtPayload = decodedToken(authToken);

    return {
      ...decodedData,
      role: (decodedData as IDecodedData)?.role?.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    return !!authToken;
  }
};

export const removeUserInfo = () => {
  return removeFromLocalStorage(authKey);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/refresh-token`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
