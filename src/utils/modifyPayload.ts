import { TPatientRegisterFormData } from "@/app/register/page";

const modifyPayload = (payload: TPatientRegisterFormData) => {
  const data = JSON.stringify(payload);
  const formData = new FormData();
  formData.append("data", data);

  return formData;
};

export default modifyPayload;
