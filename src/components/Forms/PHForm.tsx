import React, { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  children: ReactNode;
  submit: SubmitHandler<FieldValues>;
};

const PHForm = ({ children, submit }: TFormProps) => {
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    submit(data);
    reset();
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </>
  );
};

export default PHForm;
