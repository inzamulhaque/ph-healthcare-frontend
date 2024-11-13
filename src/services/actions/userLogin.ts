// "use server";

import { FieldValues } from "react-hook-form";
import setAccessToken from "./setAccessToken";

const userLogin = async (payload: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    // cache: "no-store",
    credentials: "include",
  });

  const userInfo = await res.json();

  if (userInfo?.data?.accessToken) {
    setAccessToken(userInfo?.data?.accessToken);
  }

  return userInfo;
};

export default userLogin;
