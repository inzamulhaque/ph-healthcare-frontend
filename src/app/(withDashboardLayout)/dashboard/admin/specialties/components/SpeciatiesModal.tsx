import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";

import React from "react";
import { FieldValues } from "react-hook-form";

type Tprops = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpeciatiesModal = ({ open, setOpen }: Tprops) => {
  const handleFormSubmit = async (values: FieldValues) => {};

  return (
    <>
      <PHModal open={open} setOpen={setOpen} title="Create A New Specialty">
        <PHForm submit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <PHInput label="Specialty Title" name="title" />
            </Grid>

            <Grid item md={6}>
              <PHFileUploader />
            </Grid>
          </Grid>

          <Button type="submit" sx={{ mt: 1 }}>
            Create
          </Button>
        </PHForm>
      </PHModal>
    </>
  );
};

export default SpeciatiesModal;
