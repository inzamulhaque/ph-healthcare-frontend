"use client";

import { SxProps } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TDatePicker = {
  name: string;
  size?: "small" | "medium";
  label: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
};

const PHDatePicker = ({
  name,
  size = "small",
  label,
  required,
  fullWidth = true,
  sx,
}: TDatePicker) => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={dayjs(new Date().toDateString())}
        render={({ field: { onChange, value, ...field } }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label={label}
              disablePast
              timezone="system"
              {...field}
              onChange={(date) => onChange(date)}
              value={value || Date.now()}
              slotProps={{
                textField: {
                  required: required,
                  size: size,
                  sx: {
                    ...sx,
                  },
                  variant: "outlined",
                  fullWidth: fullWidth,
                },
              }}
            />
          </LocalizationProvider>
        )}
      />
    </>
  );
};

export default PHDatePicker;
