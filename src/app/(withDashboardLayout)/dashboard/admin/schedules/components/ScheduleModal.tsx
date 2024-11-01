import PHDatePicker from "@/components/Forms/PHDatePicker";
import PHForm from "@/components/Forms/PHForm";
import PHTimePicker from "@/components/Forms/PHTimePicker";
import PHModal from "@/components/Shared/PHModal/PHModal";
import dateFormatter from "@/utils/dateFormatter";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = async (values: FieldValues) => {
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);

    try {
      console.log(values);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create Schedule">
      <PHForm submit={handleFormSubmit}>
        <Grid container spacing={2} sx={{ width: "400px" }}>
          <Grid item md={12}>
            <PHDatePicker name="startDate" label="Start Date" />
          </Grid>

          <Grid item md={12}>
            <PHDatePicker name="endDate" label="End Date" />
          </Grid>

          <Grid item md={6}>
            <PHTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item md={6}>
            <PHTimePicker name="endTime" label="End Time" />
          </Grid>
        </Grid>

        <Button type="submit" sx={{ mt: 1 }}>
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default ScheduleModal;
