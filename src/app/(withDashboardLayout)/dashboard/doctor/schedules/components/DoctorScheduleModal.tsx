import PHModal from "@/components/Shared/PHModal/PHModal";
import { Button } from "@mui/material";
import React from "react";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
  return (
    <>
      <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
        <Button>Submit</Button>
      </PHModal>
    </>
  );
};

export default DoctorScheduleModal;
