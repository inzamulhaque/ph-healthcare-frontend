"use client";

import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

interface IScrollCategoryProps {
  specialties: { id: string; title: string }[];
  value: string | null;
  setValue: (value: string) => void;
}

const ScrollCategory = ({
  specialties,
  value,
  setValue,
}: IScrollCategoryProps) => {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ maxWidth: "100%", bgcolor: "background.paper", mx: "auto" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label={"All"} value={null} sx={{ fontWeight: 600 }} />
          {specialties?.map((specialty: any) => (
            <Tab
              key={specialty.id}
              label={specialty.title}
              value={specialty.title}
              sx={{ fontWeight: 600 }}
            />
          ))}
        </Tabs>
      </Box>
    </>
  );
};

export default ScrollCategory;
