import { FC, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import LoadWrapper from "../../components/LoadWrapper/LoadWrapper";

import { useParams } from "react-router-dom";
import { useGetTaskByIdQuery } from "../../store/tasks/tasks.api";
import HtmlDiv from "../../components/HtmlDiv/HtmlDiv";

const TaskPage: FC = () => {
  const currentTaskId = useParams().taskId ?? "";
  const { isError, isLoading, data: task } = useGetTaskByIdQuery(currentTaskId);

  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false);

  const hiddenTaskAnswerRef = useRef<HTMLDivElement>(null);

  const hiddenTaskAnswerHeight =
    hiddenTaskAnswerRef.current?.getBoundingClientRect().height;

  return (
    <>
      <div className="controlls">
        <NavLink to={"/tasks"}>
          <Button>К задачам</Button>
        </NavLink>
      </div>

      <section className="page taskPage">
        <div className="taskCard">
          <LoadWrapper isError={isError} isLoading={isLoading}>
            <HtmlDiv
              content={task?.title}
              className="taskTitle taskInfoBlock"
            />

            <HtmlDiv
              content={`Тема задачи • ${task?.theme}`}
              className="taskSubTitle taskInfoBlock"
            />

            <HtmlDiv className="taskText taskInfoBlock" content={task?.text} />

            <div className="taskAnswerWrapper taskInfoBlock">
              <div
                className="hiddenTaskAnswer"
                ref={hiddenTaskAnswerRef}
                dangerouslySetInnerHTML={{
                  __html: task !== undefined ? task?.answer : "",
                }}
              />

              <span className="showAnswerToggle">
                <Button className="showAnswerToggleBtn" onClick={() => setIsShowAnswer(!isShowAnswer)}>
                  {isShowAnswer ? "×" : "+"}
                </Button>{" "}
                <p>Ответ</p>
              </span>

              <HtmlDiv
                content={task?.answer}
                className={"taskAnswer"}
                style={{
                  height: isShowAnswer ? hiddenTaskAnswerHeight : 0,
                }}
              />
            </div>
          </LoadWrapper>
        </div>
      </section>
    </>
  );
};

export default TaskPage;
