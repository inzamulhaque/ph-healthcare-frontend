"use client";

import React, { useState } from "react";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SpecialtyModal from "./components/SpeciatiesModal";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import Image from "next/image";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});

  const handleDeleteSpecialty = (id: string) => {};

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Title",
      width: 300,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "icon",
      headerName: "Icon",
      width: 300,
      headerAlign: "center",
      renderCell: ({ row }) => (
        <Box display={"flex"} justifyContent={"center"}>
          <Image src={row.icon} width={20} height={20} alt="icon" />
        </Box>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      headerAlign: "center",
      renderCell: ({ row }) => (
        <Box display={"flex"} justifyContent={"center"}>
          <IconButton
            onClick={() => handleDeleteSpecialty(row.id)}
            aria-label="delete"
          >
            <DeleteForeverIcon />
          </IconButton>
        </Box>
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
          <Box my={2}>
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
