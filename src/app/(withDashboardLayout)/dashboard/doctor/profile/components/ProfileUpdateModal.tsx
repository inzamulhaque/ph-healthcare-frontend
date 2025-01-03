import PHForm from "@/components/Forms/PHForm";
import PHFullScreenModal from "@/components/Shared/PHModal/PHFullScreenModal";
import {
  useGetSingleDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import MultipleSelectChip from "./MultipleSelectChip";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import { Gender } from "@/constant/gender";
import { toast } from "sonner";

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

  useEffect(() => {
    if (!isSuccess) return;

    setSelectedSpecialtiesIds(
      doctorData?.doctorSpecialties.map((sp: any) => {
        return sp.specialtiesId;
      })
    );
  }, [isSuccess]);

  const handleUpdateProfile = async (values: FieldValues) => {
    values.experience = Number(values.experience);
    values.apointmentFee = Number(values.apointmentFee);

    const specialties = selectedSpecialtiesIds.map((specialtiesId: string) => ({
      specialtiesId,
      isDeleted: false,
    }));

    const excludedFields: Array<keyof typeof values> = [
      "email",
      "id",
      "role",
      "needPasswordChange",
      "status",
      "createdAt",
      "updatedAt",
      "isDeleted",
      "averageRating",
      "review",
      "profilePhoto",
      "registrationNumber",
      "schedules",
      "doctorSpecialties",
    ];

    const updatedValues = Object.fromEntries(
      Object.entries(values).filter(([key]) => {
        return !excludedFields.includes(key);
      })
    );

    updatedValues.specialties = specialties;

    try {
      const res = await updateDoctor({ body: updatedValues, id }).unwrap();

      if (res?.id) {
        toast.success("Information Updated Successfully!");
        await refetch();
        setOpen(false);
      }
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PHFullScreenModal open={open} setOpen={setOpen} title="Update Profile">
        <PHForm submit={handleUpdateProfile} defaultValues={doctorData}>
          <Grid container spacing={2} sx={{ my: 5 }}>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput name="name" label="Name" sx={{ mb: 2 }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="email"
                type="email"
                label="Email"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="contactNumber"
                label="Contract Number"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="address"
                label="Address"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="registrationNumber"
                label="Registration Number"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="experience"
                type="number"
                label="Experience"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHSelectField
                items={Gender}
                name="gender"
                label="Gender"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="apointmentFee"
                type="number"
                label="ApointmentFee"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="qualification"
                label="Qualification"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="currentWorkingPlace"
                label="Current Working Place"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="designation"
                label="Designation"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MultipleSelectChip
                allSpecialties={allSpecialties}
                selectedIds={selectedSpecialtiesIds}
                setSelectedIds={setSelectedSpecialtiesIds}
              />
            </Grid>
          </Grid>

          <Button type="submit" disabled={updating}>
            Save
          </Button>
        </PHForm>
      </PHFullScreenModal>
    </>
  );
};

export default ProfileUpdateModal;
