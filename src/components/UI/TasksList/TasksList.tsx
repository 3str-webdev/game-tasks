import { FC, memo } from "react";
import List from "../../List/List";
import TaskItem from "./TaskItem/TaskItem";
import { ITasksList, ITasksListHeader } from "./TasksList.props";

import "./TasksList.scss";

const TasksListHeader: FC<ITasksListHeader> = ({ isShow }) => {
  if (isShow) {
    return (
      <div className="UITaskItem UITasksListHeader">
        <div className="UITaskItemCell">Номер задачи</div>
        <div className="UITaskItemCell">Категория</div>
        <div className="UITaskItemCell">Название</div>
      </div>
    );
  }

  return <></>;
};

const TasksList: FC<ITasksList> = ({ tasks, withHeader = true, className }) => {
  if (tasks === undefined) {
    return <></>;
  } else if (tasks.length === 0) {
    return <p>Ничего не найдено</p>;
  }

  return (
    <div className={`UITasksList ${className}`}>
      <TasksListHeader isShow={withHeader} />
      <List
        items={tasks}
        renderItem={(item) => <TaskItem key={item.taskId} task={item} />}
      />
    </div>
  );
};

export default memo(TasksList);
