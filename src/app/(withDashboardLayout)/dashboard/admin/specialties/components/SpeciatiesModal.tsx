"use client";

import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import modifyPayload from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";

import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type Tprops = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: Tprops) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
      const res = await createSpecialty(data).unwrap();

      if (res?.id) {
        toast.success("Specialty Created Successfully!");
        setOpen(false);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <PHModal open={open} setOpen={setOpen} title="Create A New Specialty">
        <PHForm submit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <PHInput label="Specialty Title" name="title" />
            </Grid>

            <Grid item md={6}>
              <PHFileUploader name="file" label="Upload Logo" />
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

export default SpecialtyModal;
