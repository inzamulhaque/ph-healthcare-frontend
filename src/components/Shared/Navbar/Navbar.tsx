"use client";

import useUserInfo from "@/hooks/useUserInfo";
import logoutUser from "@/services/actions/logoutUser";
// import AuthButton from "@/components/UI/AuthButton/AuthButton";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { JwtPayload } from "jwt-decode";
// import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const info = useUserInfo();
  const [userInfo, setUserInfo] = useState<
    (JwtPayload & { role: string }) | null
  >(null);
  const router = useRouter();

  useEffect(() => {
    setUserInfo(info);
  }, [info]);

  // const AuthButton = dynamic(
  //   () => import("@/components/UI/AuthButton/AuthButton"),
  //   {
  //     ssr: false,
  //     loading: () => (
  //       <Button
  //         component={Link}
  //         href="/login"
  //         sx={{
  //           opacity: 0,
  //         }}
  //       >
  //         Login
  //       </Button>
  //     ),
  //   }
  // );

  const handleLogOut = () => {
    logoutUser(router);
    setUserInfo(null);
  };

  return (
    <>
      <Container>
        <Stack
          py={2}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h4" component={Link} href="/" fontWeight={600}>
            P
            <Box component={"span"} color={"primary.main"}>
              H
            </Box>{" "}
            Health Care
          </Typography>

          <Stack direction={"row"} gap={4} justifyContent={"space-between"}>
            <Typography component={Link} href="/consultation">
              Consultation
            </Typography>
            <Typography component={Link} href="/login">
              Health Plans
            </Typography>
            <Typography component={Link} href="/login">
              Medicine
            </Typography>
            <Typography component={Link} href="/login">
              Diagnostics
            </Typography>
            <Typography component={Link} href="/login">
              NGOs
            </Typography>
            {userInfo?.role && (
              <Typography
                component={Link}
                href={`/dashboard/${userInfo.role.toLocaleLowerCase()}`}
              >
                Dashboard
              </Typography>
            )}
          </Stack>

          {userInfo?.role ? (
            <Button color="error" onClick={handleLogOut}>
              LogOut
            </Button>
          ) : (
            <Button component={Link} href="/login">
              Login
            </Button>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default Navbar;
