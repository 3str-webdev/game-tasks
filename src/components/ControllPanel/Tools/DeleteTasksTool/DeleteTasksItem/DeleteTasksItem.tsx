import { FC } from "react";
import { ITask } from "../../../../../types/types";
import { VscTrash } from "react-icons/vsc";

import "./DeleteTasksItem.scss";
import { useAppSelector } from "../../../../../hooks/redux";

interface IDeleteTasksItem {
  task: ITask;
  deleteTaskTrigger: any;
  updateTasksList: any;
  isDeleteLoading: boolean;
}

const DeleteTasksItem: FC<IDeleteTasksItem> = ({
  task,
  deleteTaskTrigger,
  updateTasksList,
  isDeleteLoading,
}) => {
  const password = useAppSelector((state) => state.requestReduser);

  const deleteTask = (): void => {
    deleteTaskTrigger({
      password,
      data: {
        taskId: task.taskId,
      },
    });
    updateTasksList();
  };

  return (
    <div className="DeleteTasksItem">
      <div className="DeleteTasksCell">{task.taskId}</div>
      <div className="DeleteTasksCell">{task.theme}</div>
      <div className="DeleteTasksCell">{task.title}</div>
      <button
        className={`DeleteTasksCell DeleteTasksDeleteBtn${
          isDeleteLoading ? " loading" : ""
        }`}
        disabled={isDeleteLoading}
        onClick={deleteTask}
      >
        <VscTrash />
      </button>
    </div>
  );
};

export default DeleteTasksItem;
