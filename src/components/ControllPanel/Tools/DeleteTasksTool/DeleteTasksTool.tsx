import { FC } from "react";
import List from "../../../List/List";
import LoadWrapper from "../../../LoadWrapper/LoadWrapper";
import DeleteTasksItem from "./DeleteTasksItem/DeleteTasksItem";
import Alert from "../../../UI/Alert/Alert";
import { useShowAlert } from "../../../../hooks/useShowAlert";

import {
  useDeleteTaskMutation,
  useGetAllTasksQuery,
} from "../../../../store/tasks/tasks.api";

import "./DeleteTaskTool.scss";
import { AlertVariants } from "../../../UI/Alert/Alert.props";

const DeleteTasksTool: FC = () => {
  const { isError, isLoading, data: tasks } =
    useGetAllTasksQuery();
  const [
    deleteTaskTrigger,
    {
      isError: isDeleteError,
      isLoading: isDeleteLoading,
      isSuccess: isDeleteSuccess,
    },
  ] = useDeleteTaskMutation();

  const isShowErrorAlert = useShowAlert(isDeleteError);
  const isSuccessErrorAlert = useShowAlert(isDeleteSuccess);

  return (
    <section className="DeleteTasksTool">
      <LoadWrapper isError={isError} isLoading={isLoading}>
        <List
          items={tasks}
          renderItem={(task) => (
            <DeleteTasksItem
              deleteTaskTrigger={deleteTaskTrigger}
              isDeleteLoading={isDeleteLoading}
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
