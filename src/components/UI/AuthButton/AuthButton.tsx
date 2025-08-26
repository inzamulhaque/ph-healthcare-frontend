import logoutUser from "@/services/actions/logoutUser";
import { getUserInfo, IDecodedData } from "@/services/auth.service";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AuthButton = () => {
  const router = useRouter();
  const userInfo = getUserInfo();

  const handleLogOut = () => {
    logoutUser(router);
  };

  return (
    <>
      {((userInfo as IDecodedData) || null || undefined)?.userId ? (
        <Button color="error" onClick={handleLogOut}>
          LogOut
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
