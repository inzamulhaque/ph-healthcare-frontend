import { FieldValues } from "react-hook-form";

const modifyPayload = (payload: FieldValues) => {
  const data = JSON.stringify(payload);
  const formData = new FormData();
  formData.append("data", data);

  return formData;
};

export default modifyPayload;
