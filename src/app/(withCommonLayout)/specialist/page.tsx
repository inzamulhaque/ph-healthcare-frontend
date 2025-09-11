"use client";
import DoctorCard from "@/components/UI/Doctor/DoctorCard";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorApi";
import { TDoctor } from "@/types/doctor";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

type TSearchParams = {
  specialty?: string;
};

const Page = ({ searchParams }: { searchParams: TSearchParams }) => {
  const [specialty, setSpecialty] = useState<string | null>(null);

  useEffect(() => {
    if (searchParams.specialty) {
      setSpecialty(searchParams.specialty);
    }
  }, [searchParams.specialty]);

  const { data } = useGetAllDoctorsQuery({ specialties: specialty });

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
