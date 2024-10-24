import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import PHModal from "@/components/Shared/PHModal/PHModal";

const SpecialtiesPage = () => {
  return (
    <>
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button>Create Specialty</Button>
          <PHModal />

          <TextField size="small" placeholder="Search Speciaties" />
        </Stack>
      </Box>
    </>
  );
};

export default SpecialtiesPage;
