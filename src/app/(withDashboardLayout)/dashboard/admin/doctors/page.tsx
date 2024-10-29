import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";

const DoctorsPage = () => {
  return (
    <>
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button>Create Doctor</Button>

          <TextField size="small" placeholder="Search Doctors" />
        </Stack>
      </Box>
    </>
  );
};

export default DoctorsPage;
