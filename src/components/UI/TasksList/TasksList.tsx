import { FC, memo } from "react";
import { ITask } from "../../../types/types";
import List from "../../List/List";
import TaskItem from "./TaskItem/TaskItem";

import "./TasksList.scss";

interface ITasksList {
  tasks: ITask[] | undefined;
}

const TasksList: FC<ITasksList> = ({ tasks }) => {
  return (
    <div className="UITasksList">
      {tasks !== undefined ? (
        tasks.length > 0 ? (
          <>
            <div className="UITaskItem UITasksListHeader">
              <div className="UITaskItemCell">Номер задачи</div>
              <div className="UITaskItemCell">Категория</div>
              <div className="UITaskItemCell">Название</div>
            </div>
            <List
              items={tasks}
              renderItem={(item) => <TaskItem key={item.taskId} task={item} />}
            />
          </>
        ) : (
          <p>Ничего не найдено</p>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default memo(TasksList);
