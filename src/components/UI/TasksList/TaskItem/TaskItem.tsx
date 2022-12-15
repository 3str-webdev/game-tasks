import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ITask } from "../../../../types/types";

import "./TaskItem.scss";

interface ITaskItem {
  task: ITask;
}

const TaskItem: FC<ITaskItem> = ({ task }) => {
  return (
    <NavLink to={`${task.taskId}`} className="UITaskItem">
      <div className="UITaskItemCell">{task.taskId}</div>
      <div className="UITaskItemCell">{task.theme}</div>
      <div className="UITaskItemCell">{task.title}</div>
    </NavLink>
  );
};

export default TaskItem;
