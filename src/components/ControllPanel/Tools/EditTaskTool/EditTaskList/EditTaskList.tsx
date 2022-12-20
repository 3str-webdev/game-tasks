import { FC, useEffect } from "react";
import TasksList from "../../../../UI/TasksList/TasksList";

import { useGetAllTasksQuery } from "../../../../../store/tasks/tasks.api";
import LoadWrapper from "../../../../LoadWrapper/LoadWrapper";
import { useLocation } from "react-router-dom";

import "./EditTasksList.scss";

const EditTaskList: FC = () => {
  const location = useLocation();

  const { isError, isLoading, data: tasks, refetch } = useGetAllTasksQuery();

  useEffect(() => {
    if (location.pathname === "/tasks/panel/editTask") {
      refetch();
    }
  }, [location.pathname, refetch]);

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
