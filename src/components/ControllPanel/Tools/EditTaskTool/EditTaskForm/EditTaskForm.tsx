import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../../../hooks/redux";
import {
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
} from "../../../../../store/tasks/tasks.api";
import { IAddTaskFormData } from "../../../../../types/types";
import LoadWrapper from "../../../../LoadWrapper/LoadWrapper";
import TaskForm from "../../../../TaskForm/TaskForm";

const EditTaskForm: FC = () => {
  const currentTaskId = useParams().taskId ?? "";

  const {
    isError,
    isLoading,
    data: task,
    refetch,
  } = useGetTaskByIdQuery(currentTaskId);

  const defaultValue: IAddTaskFormData = {
    theme: task?.theme ?? "",
    title: task?.title ?? "",
    text: task?.text ?? "",
    answer: task?.answer ?? "",
  };

  useEffect(() => {
    refetch();
  }, [currentTaskId, refetch]);

  const password = useAppSelector((state) => state.requestReduser);

  const [
    updateTaskTrigger,
    {
      isError: isUpdateError,
      isLoading: isUpdateLoading,
      isSuccess: isUpdateSuccess,
    },
  ] = useUpdateTaskMutation();

  const updateTask = (data: IAddTaskFormData): void => {
    updateTaskTrigger({ password, data: { taskId: currentTaskId, ...data } });
  };

  const alertMessages = {
    isError: "Ошибка при обновлении задачи",
    isSuccess: "Задача успешно обновлена",
  };

  return (
    <>
      <LoadWrapper isError={isError} isLoading={isLoading}>
        <TaskForm
          defaultValue={defaultValue}
          isLoading={isUpdateLoading}
          isError={isUpdateError}
          isSuccess={isUpdateSuccess}
          submit={updateTask}
          alertMessages={alertMessages}
          resetAfterSubmit={false}
        />
      </LoadWrapper>
    </>
  );
};

export default EditTaskForm;
