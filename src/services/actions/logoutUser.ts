import { authKey } from "@/constant/authKey";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import deleteCookies from "./deleteCookies";
import { removeUserInfo } from "../auth.service";

const logoutUser = (router: AppRouterInstance) => {
  removeUserInfo();
  deleteCookies([authKey, "refreshToken"]);
  router.push("/");
  router.refresh();
};

export default logoutUser;
