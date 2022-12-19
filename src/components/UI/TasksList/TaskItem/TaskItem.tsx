import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ITaskItemProps } from "./Task.props";

import "./TaskItem.scss";

const TaskItem: FC<ITaskItemProps> = ({ task, className, ...props }) => {
  return (
    <NavLink
      to={`${task.taskId}`}
      className={`UITaskItem ${className}`}
      {...props}
    >
      <div className="UITaskItemCell">{task.taskId}</div>
      <div className="UITaskItemCell">{task.theme}</div>
      <div className="UITaskItemCell">{task.title}</div>
    </NavLink>
  );
};

export default TaskItem;
