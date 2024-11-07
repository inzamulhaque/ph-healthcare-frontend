"use client";

import PHModal from "@/components/Shared/PHModal/PHModal";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";
import { Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";
import MultipleSelectFieldChip from "./MultipleSelectFieldChip";
import { useCreateDoctorScheduleMutation } from "@/redux/api/doctorScheduleApi";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  );

  const [selectedScheduleIds, setSelectedScheduleIds] = useState<string[]>([]);

  const query: Record<string, unknown> = {};

  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();
    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }

  const { data } = useGetAllSchedulesQuery(query);
  const schedules = data?.schedules;

  const [createDoctorSchedule, { isLoading }] =
    useCreateDoctorScheduleMutation();

  const handleCreateDoctorSchedule = async () => {
    try {
      const res = await createDoctorSchedule({
        scheduleIds: selectedScheduleIds,
      }).unwrap();

      if (res.count) {
        toast.success("Schedules create successsfully!");
        setOpen(false);
        setSelectedScheduleIds([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
        <Stack
          direction={"column"}
          gap={2}
          sx={{
            minWidth: "450px",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disablePast
              label="Select Date"
              value={dayjs(selectedDate)}
              onChange={(newValue) =>
                setSelectedDate(dayjs(newValue).toISOString())
              }
              sx={{ width: "100%" }}
            />
          </LocalizationProvider>

          <MultipleSelectFieldChip
            schedules={schedules}
            selectedScheduleIds={selectedScheduleIds}
            setSelectedScheduleIds={setSelectedScheduleIds}
          />

          <LoadingButton
            color="primary"
            onClick={handleCreateDoctorSchedule}
            loading={isLoading}
            loadingPosition="start"
            startIcon={<AddCircleIcon />}
            variant="contained"
          >
            Create Schedules
          </LoadingButton>
        </Stack>
      </PHModal>
    </>
  );
};

export default DoctorScheduleModal;
