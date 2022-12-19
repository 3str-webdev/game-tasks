import { FC } from "react";
import TaskForm from "../../../TaskForm/TaskForm";

import { useAddTaskMutation } from "../../../../store/tasks/tasks.api";
import { useAppSelector } from "../../../../hooks/redux";

import { IAddTaskFormData, DAddTaskFormData } from "../../../../types/types";

import "./AddTaskTool.scss";

const AddTaskTool: FC = () => {
  const [addTask, { isError, isLoading, isSuccess }] = useAddTaskMutation();

  const moderatorPassrord = useAppSelector((state) => state.requestReduser);

  const submit = (formData: IAddTaskFormData) => {
    // TODO: Validation

    addTask({ password: moderatorPassrord, data: formData });
  };

  const alertMessages = {
    isError: "Ошибка при добавлении задачи",
    isSuccess: "Задача успешно добавлена",
  };

  return (
    <>
      <TaskForm
        defaultValue={DAddTaskFormData}
        submit={submit}
        isError={isError}
        isLoading={isLoading}
        isSuccess={isSuccess}
        alertMessages={alertMessages}
      />
    </>
  );
};

export default AddTaskTool;
