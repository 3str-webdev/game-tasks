import { FC, useEffect } from "react";
import List from "../../../List/List";
import LoadWrapper from "../../../LoadWrapper/LoadWrapper";
import DeleteTasksItem from "./DeleteTasksItem/DeleteTasksItem";
import Alert, { AlertVariants } from "../../../UI/Alert/Alert";

import {
  useDeleteTaskMutation,
  useLazyGetAllTasksQuery,
} from "../../../../store/tasks/tasks.api";
import { useShowAlert } from "../../../../hooks/useShowAlert";

import { IPostRequest } from "../../../../types/types";

import "./DeleteTaskTool.scss";

interface IDeleteTasksTool {
  request: IPostRequest;
}

const DeleteTasksTool: FC<IDeleteTasksTool> = ({ request }) => {
  const [getAllTasksTrigger, { isError, isLoading, data: tasks }] =
    useLazyGetAllTasksQuery();
  const [
    deleteTaskTrigger,
    {
      isError: isDeleteError,
      isLoading: isDeleteLoading,
      isSuccess: isDeleteSuccess,
      data: currentTasks,
    },
  ] = useDeleteTaskMutation();

  const isShowErrorAlert = useShowAlert(isDeleteError);
  const isSuccessErrorAlert = useShowAlert(isDeleteSuccess);

  useEffect(() => {
    getAllTasksTrigger();
    // console.log(isDeleteError, currentTasks);
  }, [getAllTasksTrigger, currentTasks]);

  return (
    <section className="DeleteTasksTool">
      <LoadWrapper isError={isError} isLoading={isLoading}>
        <List
          items={tasks}
          renderItem={(task) => (
            <DeleteTasksItem
              request={request}
              deleteTaskTrigger={deleteTaskTrigger}
              updateTasksList={getAllTasksTrigger}
              task={task}
              key={task.id}
            />
          )}
        />
      </LoadWrapper>

      {tasks?.length === 0 && <p>Ничего не найдено</p>}

      <Alert
        isShow={isShowErrorAlert}
        message={`Ошибка при удалении задачи`}
        variant={AlertVariants.negative}
      />
      <Alert
        isShow={isSuccessErrorAlert}
        message={"Задача успешно удалена"}
        variant={AlertVariants.positive}
      />
    </section>
  );
};

export default DeleteTasksTool;
