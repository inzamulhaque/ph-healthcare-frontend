"use client";

import {
  getUserInfo,
  IDecodedData,
  removeUserInfo,
} from "@/services/auth.service";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const userInfo = getUserInfo();

  const handleLogOut = () => {
    removeUserInfo();
    router.refresh();
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
          </Stack>

          {((userInfo as IDecodedData) || null || undefined)?.userId ? (
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
