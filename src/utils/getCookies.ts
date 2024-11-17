"use server";

import { cookies } from "next/headers";

const getCookies = async (key: string) => {
  const cookie = await cookies()?.get(key)?.value;

  return cookie;
};

export default getCookies;
