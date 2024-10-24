"use client";

import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import SpeciatiesModal from "./components/SpeciatiesModal";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
          <SpeciatiesModal open={isModalOpen} setOpen={setIsModalOpen} />

          <TextField size="small" placeholder="Search Speciaties" />
        </Stack>
      </Box>
    </>
  );
};

export default SpecialtiesPage;
