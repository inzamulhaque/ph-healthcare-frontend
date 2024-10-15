"use client";
import { useForm, SubmitHandler } from "react-hook-form";
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
import React from "react";
import assets from "@/assets";
import Link from "next/link";
import modifyPayload from "@/utils/modifyPayload";
import registerPatient from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import userLogin from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.service";

type TPatient = {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
};

export type TPatientRegisterFormData = {
  password: string;
  patient: TPatient;
};

const RegisterPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TPatientRegisterFormData>();

  const onSubmit: SubmitHandler<TPatientRegisterFormData> = async (values) => {
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message);

        const loginRes = await userLogin({
          email: values.patient.email,
          password: values.password,
        });
        if (loginRes?.data?.accessToken) {
          toast.success(loginRes?.message);
          storeUserInfo(loginRes?.data?.accessToken);
          router.push("/");
        }
      }
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
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
                  Patient Register
                </Typography>
              </Box>
            </Stack>

            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} my={1}>
                  <Grid item md={12}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("patient.name")}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      label="Email"
                      type="email"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("patient.email")}
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
                  <Grid item md={6}>
                    <TextField
                      label="Contact Number"
                      type="tel"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("patient.contactNumber")}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      label="Address"
                      type="text"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("patient.address")}
                    />
                  </Grid>
                </Grid>
                <Button
                  fullWidth={true}
                  type="submit"
                  sx={{
                    margin: "10px 0px",
                  }}
                >
                  Register
                </Button>
              </form>

              <Typography
                component="p"
                fontWeight={300}
                sx={{
                  textAlign: "center",
                }}
              >
                Do you already have an account?{" "}
                <Box component={"span"} color={"primary.main"}>
                  <Link href="/login">Login</Link>
                </Box>
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default RegisterPage;
