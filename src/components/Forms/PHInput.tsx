import { SxProps, TextField, TextFieldVariants } from "@mui/material";
import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";

type TPHInputProps = {
  name: string;
  label: string;
  type?: string;
  variant?: TextFieldVariants | undefined;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
};

const PHInput = ({
  name,
  label,
  type = "text",
  variant = "outlined",
  size = "small",
  fullWidth = true,
  sx,
  placeholder,
  required,
}: TPHInputProps) => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            sx={sx}
            label={label}
            type={type}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            placeholder={placeholder}
            required={required}
            error={!!error?.message}
            helperText={error?.message}
          />
        )}
      />
    </>
  );
};

export default PHInput;
