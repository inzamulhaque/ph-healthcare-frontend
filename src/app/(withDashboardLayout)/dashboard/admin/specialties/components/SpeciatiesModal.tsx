import PHModal from "@/components/Shared/PHModal/PHModal";
import { TextField } from "@mui/material";
import React from "react";

type Tprops = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpeciatiesModal = ({ open, setOpen }: Tprops) => {
  return (
    <>
      <PHModal open={open} setOpen={setOpen} title="Create Specialist">
        <TextField />
      </PHModal>
    </>
  );
};

export default SpeciatiesModal;
