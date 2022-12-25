import { FC } from "react";
import TasksList from "../../../../UI/TasksList/TasksList";

import { useGetAllTasksQuery } from "../../../../../store/tasks/tasks.api";
import LoadWrapper from "../../../../LoadWrapper/LoadWrapper";

import "./EditTasksList.scss";

const EditTaskList: FC = () => {
  const { isError, isLoading, data: tasks } = useGetAllTasksQuery();

  return (
    <>
      <div className="editTasksList">
        <LoadWrapper isError={isError} isLoading={isLoading}>
          <TasksList tasks={tasks} withHeader={false} />
        </LoadWrapper>
      </div>
    </>
  );
};

export default EditTaskList;
