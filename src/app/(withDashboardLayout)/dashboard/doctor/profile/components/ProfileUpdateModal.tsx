import PHForm from "@/components/Forms/PHForm";
import PHFullScreenModal from "@/components/Shared/PHModal/PHFullScreenModal";
import {
  useGetSingleDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const ProfileUpdateModal = ({ open, setOpen, id }: TProps) => {
  const { data: doctorData, refetch, isSuccess } = useGetSingleDoctorQuery(id);
  const { data: allSpecialties } = useGetAllSpecialtiesQuery(undefined);

  const [selectedSpecialtiesIds, setSelectedSpecialtiesIds] = useState<
    string[]
  >([]);

  const [updateDoctor, { isLoading: updating }] = useUpdateDoctorMutation();

  const handleUpdateProfile = async (values: FieldValues) => {};

  return (
    <>
      <PHFullScreenModal open={open} setOpen={setOpen} title="Update Profile">
        <PHForm submit={handleUpdateProfile} defaultValues={doctorData}>
          <Button type="submit" disabled={updating}>
            Save
          </Button>
        </PHForm>
      </PHFullScreenModal>
    </>
  );
};

export default ProfileUpdateModal;
