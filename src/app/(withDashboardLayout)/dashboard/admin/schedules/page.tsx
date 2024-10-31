"use client";

import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ScheduleModal from "./components/ScheduleModal";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allSchedule, setAllSchedule] = useState<any>([]);

  return (
    <>
      <Box>
        <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
        <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      </Box>
    </>
  );
};

export default SchedulesPage;
