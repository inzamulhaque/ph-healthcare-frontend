export type TSchedule = {
  [x: string]: any;
  id?: string;
  startDate: string;
  endDate: string;
};

export type TScheduleFrom = {
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
};
