"use client";
import DoctorCard from "@/components/UI/Doctor/DoctorCard";
import ScrollCategory from "@/components/UI/Doctor/ScrollCategory";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorApi";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { TDoctor } from "@/types/doctor";
import { Box } from "@mui/material";
import React, { useState } from "react";

const Page = () => {
  const { data: specialties } = useGetAllSpecialtiesQuery({});
  const [value, setValue] = useState<string | null>(null);

  const { data } = useGetAllDoctorsQuery({ specialties: value });

  return (
    <>
      <ScrollCategory
        specialties={specialties}
        value={value}
        setValue={setValue}
      />

      {data?.doctors?.map((doctor: TDoctor) => (
        <Box key={String(doctor.id)}>
          <DoctorCard doctor={doctor} />
        </Box>
      ))}
    </>
  );
};

export default Page;
