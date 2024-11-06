"use client";

import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import { Gender } from "@/constant/gender";
import {
  useGetSingleDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  params: Record<string, unknown>;
};

const DoctorUpdatePage = ({ params }: TProps) => {
  const router = useRouter();

  const id = params?.doctorId;

  const { data, isLoading } = useGetSingleDoctorQuery(id as string);
  const [updateDoctor] = useUpdateDoctorMutation();

  const handleUpdateDoctorInfo = async (values: FieldValues) => {
    values.experience = Number(values.experience);
    values.apointmentFee = Number(values.apointmentFee);
    values.id = id;

    try {
      const res = await updateDoctor({ id: values.id, body: values }).unwrap();
      if (res?.id) {
        toast.success("Doctor Updated Successfully!");
        router.push("/dashboard/admin/doctors");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const defaultValues = {
    email: data?.email || "",
    name: data?.name || "",
    contactNumber: data?.contactNumber || "",
    address: data?.address || "",
    registrationNumber: data?.registrationNumber || "",
    gender: data?.gender || "",
    experience: data?.experience || 0,
    apointmentFee: data?.apointmentFee || 0,
    qualification: data?.qualification || "",
    currentWorkingPlace: data?.currentWorkingPlace || "",
    designation: data?.designation || "",
  };

  return (
    <>
      <Box>
        <Typography component={"h5"} variant="h5" textAlign={"center"}>
          Update Doctor Info
        </Typography>
        {!isLoading && (
          <PHForm submit={handleUpdateDoctorInfo} defaultValues={defaultValues}>
            <Grid container spacing={2} sx={{ my: 5 }}>
              <Grid item xs={12} sm={12} md={4}>
                <PHInput
                  name="name"
                  label="Name"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <PHInput
                  name="email"
                  type="email"
                  label="Email"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <PHInput
                  name="contactNumber"
                  label="Contract Number"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <PHInput
                  name="address"
                  label="Address"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <PHInput
                  name="registrationNumber"
                  label="Registration Number"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <PHInput
                  name="experience"
                  type="number"
                  label="Experience"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <PHSelectField
                  items={Gender}
                  name="gender"
                  label="Gender"
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <PHInput
                  name="apointmentFee"
                  type="number"
                  label="ApointmentFee"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <PHInput
                  name="qualification"
                  label="Qualification"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <PHInput
                  name="currentWorkingPlace"
                  label="Current Working Place"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <PHInput
                  name="designation"
                  label="Designation"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>

            <Button type="submit">Update</Button>
          </PHForm>
        )}
      </Box>
    </>
  );
};

export default DoctorUpdatePage;
