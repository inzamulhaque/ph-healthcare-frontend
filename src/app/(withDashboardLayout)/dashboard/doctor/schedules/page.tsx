"use client";

import { Box, Button, IconButton, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import DoctorScheduleModal from "./components/DoctorScheduleModal";
import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import { TSchedule } from "@/types/schedule";
import dateFormatter from "@/utils/dateFormatter";
import dayjs from "dayjs";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

const DoctorSchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [allSchedule, setAllSchedule] = useState<Record<string, unknown>[]>([]);

  const query: Record<string, unknown> = {};

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  query["page"] = page;
  query["limit"] = limit;

  const { data, isLoading } = useGetAllDoctorSchedulesQuery(query);

  const schedules = data?.doctorSchedules;
  const meta = data?.meta;

  let pageCount: number;
  if (meta?.total) {
    pageCount = Math.ceil(meta?.total / limit);
  }

  useEffect(() => {
    const updateData = schedules?.map((schedule: TSchedule, index: number) => {
      return {
        sl: index + 1,
        id: index + 1,
        startDate: dateFormatter(schedule?.schedule?.startDate),
        startTime: dayjs(schedule?.schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.schedule?.endDate).format("hh:mm a"),
      };
    });

    setAllSchedule(updateData as Record<string, unknown>[]);
  }, [schedules]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL" },
    { field: "startDate", headerName: "Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete">
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        );
      },
    },
  ];

  return (
    <>
      <Box>
        <Button onClick={() => setIsModalOpen(true)}>
          Create Doctor Schedule
        </Button>

        <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />

        <Box sx={{ mb: 5 }}></Box>

        <Box>
          {!isLoading ? (
            <Box my={2}>
              <DataGrid
                rows={allSchedule}
                columns={columns}
                sx={{ border: 0 }}
                hideFooterPagination={true}
                slots={{
                  footer: () => (
                    <>
                      <Box
                        sx={{
                          mt: 1,
                          display: "flex",
                          justifyContent: "end",
                        }}
                      >
                        <Pagination
                          count={pageCount}
                          page={page}
                          variant="outlined"
                          shape="rounded"
                          color="primary"
                          onChange={handlePageChange}
                        />
                      </Box>
                    </>
                  ),
                }}
              />
            </Box>
          ) : (
            <h1>Loading.....</h1>
          )}
        </Box>
      </Box>
    </>
  );
};

export default DoctorSchedulesPage;
