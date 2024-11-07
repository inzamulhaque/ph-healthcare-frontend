"use client";

import PHModal from "@/components/Shared/PHModal/PHModal";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";
import { Button, Stack } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";
import MultipleSelectFieldChip from "./MultipleSelectFieldChip";

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

  const { data, isLoading } = useGetAllSchedulesQuery(query);
  const schedules = data?.schedules;

  console.log(selectedScheduleIds);

  return (
    <>
      <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
        <Stack direction={"column"} gap={2}>
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

          <Button>Submit</Button>
        </Stack>
      </PHModal>
    </>
  );
};

export default DoctorScheduleModal;
