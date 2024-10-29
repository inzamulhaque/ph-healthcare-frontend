"use client";

// import AuthButton from "@/components/UI/AuthButton/AuthButton";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    {
      ssr: false,
      loading: () => (
        <Button
          component={Link}
          href="/login"
          sx={{
            opacity: 0,
          }}
        >
          Login
        </Button>
      ),
    }
  );

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

          <AuthButton />
        </Stack>
      </Container>
    </>
  );
};

export default Navbar;
