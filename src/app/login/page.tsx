"use client";
import assets from "@/assets";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import userLogin from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.service";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
  const router = useRouter();

  const onSubmit = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo(res?.data?.accessToken);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Stack
          sx={{
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: 600,
              width: "100%",
              boxShadow: 1,
              borderRadius: 1,
              p: 4,
            }}
          >
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Image
                  src={assets.svgs.logo}
                  width={50}
                  height={50}
                  alt="logo"
                />
              </Box>

              <Box>
                <Typography variant="h6" fontWeight={600}>
                  Login PH HealthCare
                </Typography>
              </Box>
            </Stack>

            <Box>
              <PHForm submit={onSubmit}>
                <Grid container spacing={2} my={1}>
                  <Grid item md={6}>
                    <PHInput name="email" label="Email" type="email" />
                  </Grid>
                  <Grid item md={6}>
                    <PHInput name="password" label="Password" type="password" />
                  </Grid>
                </Grid>

                <Typography
                  component="p"
                  fontWeight={300}
                  mb="1"
                  sx={{
                    textAlign: "end",
                  }}
                >
                  <Link href="/forgot-password">Forgot Password?</Link>
                </Typography>

                <Button
                  type="submit"
                  fullWidth={true}
                  sx={{
                    margin: "10px 0px",
                  }}
                >
                  Login
                </Button>
              </PHForm>

              <Typography
                component="p"
                fontWeight={300}
                sx={{
                  textAlign: "center",
                }}
              >
                Don&#39;t have an account?{" "}
                <Box component={"span"} color={"primary.main"}>
                  <Link href="/register">Create an account</Link>
                </Box>
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default LoginPage;
