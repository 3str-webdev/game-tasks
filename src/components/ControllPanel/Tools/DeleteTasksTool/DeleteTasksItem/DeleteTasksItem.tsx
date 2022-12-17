import { FC } from "react";
import { ITask } from "../../../../../types/types";
import { VscTrash } from "react-icons/vsc";

import { IPostRequest } from "../../../../../types/types";

import "./DeleteTasksItem.scss";

interface IDeleteTasksItem {
  request: IPostRequest;
  task: ITask;
  deleteTaskTrigger: any;
  updateTasksList: any;
}

const DeleteTasksItem: FC<IDeleteTasksItem> = ({
  request,
  task,
  deleteTaskTrigger,
  updateTasksList,
}) => {
  const deleteTask = (): void => {
    request.data = { taskId: task.taskId };

    deleteTaskTrigger(request);
    updateTasksList();
  };

  return (
    <button className="DeleteTasksItem">
      <div className="DeleteTasksCell">{task.taskId}</div>
      <div className="DeleteTasksCell">{task.theme}</div>
      <div className="DeleteTasksCell">{task.title}</div>
      <div
        className="DeleteTasksCell DeleteTasksDeleteBtn"
        onClick={deleteTask}
      >
        <VscTrash />
      </div>
    </button>
  );
};

export default DeleteTasksItem;
