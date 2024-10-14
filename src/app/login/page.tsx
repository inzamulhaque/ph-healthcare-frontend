"use client";
import assets from "@/assets";
import userLogin from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.service";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export type TLoginFormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TLoginFormData>();

  const onSubmit: SubmitHandler<TLoginFormData> = async (values) => {
    try {
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        storeUserInfo(res?.data?.accessToken);
      }
      console.log(res);
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} my={1}>
                  <Grid item md={6}>
                    <TextField
                      label="Email"
                      type="email"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("email")}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("password")}
                    />
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
              </form>

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
