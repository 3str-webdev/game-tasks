import { FC } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import LoadWrapper from "../../components/LoadWrapper/LoadWrapper";

import { useParams } from "react-router-dom";
import { useGetTaskByIdQuery } from "../../store/tasks/tasks.api";

const TaskPage: FC = () => {
  const currentTaskId = useParams().taskId ?? "";
  const { isError, isLoading, data: task } = useGetTaskByIdQuery(currentTaskId);

  return (
    <>
      <div className="controlls">
        <NavLink to={"/tasks"}>
          <Button value="К задачам" />
        </NavLink>
      </div>

      <section className="page taskPage">
        <div className="taskCard">
          <LoadWrapper isError={isError} isLoading={isLoading}>
            <div className="taskTitle taskInfoBlock">{task?.title}</div>
            <div className="taskSubTitle taskInfoBlock">
              Тема задачи • {task?.theme}
            </div>
            <div className="taskText taskInfoBlock">{task?.text}</div>
          </LoadWrapper>
        </div>
      </section>
    </>
  );
};

export default TaskPage;
