"use server";
import { TLoginFormData } from "@/app/login/page";

const userLogin = async (payload: TLoginFormData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const userInfo = await res.json();

  return userInfo;
};

export default userLogin;
