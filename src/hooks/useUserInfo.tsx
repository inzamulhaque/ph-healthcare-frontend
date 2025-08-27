import { authKey } from "@/constant/authKey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage } from "@/utils/local-storage";
import { JwtPayload } from "jwt-decode";
import { useEffect, useState } from "react";

const useUserInfo = (): (JwtPayload & { role: string }) | null => {
  const [userInfo, setUserInfo] = useState<
    (JwtPayload & { role: string }) | null
  >(null);

  useEffect(() => {
    const authToken = getFromLocalStorage(authKey);
    if (authToken) {
      const decodedData: JwtPayload & { role: string } = decodedToken(
        authToken
      ) as JwtPayload & { role: string };

      setUserInfo(decodedData);
    } else {
      setUserInfo(null);
    }
  }, []);

  return userInfo;
};

export default useUserInfo;
