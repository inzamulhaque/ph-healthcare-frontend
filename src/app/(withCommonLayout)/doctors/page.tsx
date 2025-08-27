"use client";
import DoctorCard from "@/components/UI/Doctor/DoctorCard";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorApi";
import { TDoctor } from "@/types/doctor";
import { Box } from "@mui/material";
import React from "react";

const Page = () => {
  const { data } = useGetAllDoctorsQuery({});
  return (
    <>
      {data?.doctors?.map((doctor: TDoctor) => (
        <Box key={String(doctor.id)}>
          <DoctorCard doctor={doctor} />
        </Box>
      ))}
    </>
  );
};

export default Page;
