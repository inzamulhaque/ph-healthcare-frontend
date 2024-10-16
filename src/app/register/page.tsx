"use client";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
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
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";

const RegisterPage = () => {
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
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
              <PHForm submit={onSubmit}>
                <Grid container spacing={2} my={1}>
                  <Grid item md={12}>
                    <PHInput
                      label="Name"
                      name="patient.name"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <PHInput
                      label="Email"
                      type="email"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      name="patient.email"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <PHInput
                      label="Password"
                      type="password"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      name="password"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <PHInput
                      label="Contact Number"
                      type="tel"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      name="patient.contactNumber"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <PHInput
                      label="Address"
                      type="text"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      name="patient.address"
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
              </PHForm>

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
