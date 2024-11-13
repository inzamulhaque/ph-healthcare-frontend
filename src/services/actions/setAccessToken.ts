"use server";

import { authKey } from "@/constant/authKey";
import { decodedToken } from "@/utils/jwt";
import { JwtPayload } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const setAccessToken = (token: string, option?: Record<string, unknown>) => {
  const decodedUserInfo = decodedToken(token) || {};

  cookies().set(authKey, token);

  if (option && option.passwordChangeRequired) {
    redirect("/dashboard/change-password");
  } else if (option && !option.passwordChangeRequired && option.redirect) {
    redirect(option.redirect as string);
  } else {
    redirect(`/dashboard/${decodedUserInfo?.role.toLowerCase()}`);
  }
};

export default setAccessToken;
