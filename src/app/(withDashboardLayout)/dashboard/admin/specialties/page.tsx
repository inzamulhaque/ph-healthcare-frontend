"use client";

import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import SpecialtyModal from "./components/SpeciatiesModal";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import Image from "next/image";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 170 },
    {
      field: "icon",
      headerName: "Icon",
      width: 170,
      renderCell: ({ row }) => (
        <Image src={row.icon} width={40} height={40} alt="icon" />
      ),
    },
  ];

  return (
    <>
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
          <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />

          <TextField size="small" placeholder="Search Speciaties" />
        </Stack>

        {!isLoading ? (
          <Box>
            <DataGrid rows={data} columns={columns} sx={{ border: 0 }} />
          </Box>
        ) : (
          <h1>Loading...</h1>
        )}
      </Box>
    </>
  );
};

export default SpecialtiesPage;
