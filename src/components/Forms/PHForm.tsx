import React, { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  resolver?: any;
};

type TFormProps = {
  children: ReactNode;
  submit: SubmitHandler<FieldValues>;
} & TFormConfig;

const PHForm = ({ children, submit, resolver }: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
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
