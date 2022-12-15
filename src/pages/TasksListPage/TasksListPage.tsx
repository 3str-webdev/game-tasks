import { FC } from "react";
import LoadWrapper from "../../components/LoadWrapper/LoadWrapper";
import Section from "../../components/UI/Section/Section";
import TasksList from "../../components/UI/TasksList/TasksList";

import { useGetAllTasksQuery } from "../../store/tasks/tasks.api";

const TasksListPage: FC = () => {
  const { isError, isLoading, data: tasks } = useGetAllTasksQuery();

  return (
    <section className="page tasksListPage">
      <Section title="Задачи">
        <div>
          На этой странице вы можете познакомиться со списком задач, доступных
          для пользователей. Мы постоянно расширяем каталог новыми темами и
          задачами для Вас
        </div>
      </Section>
      <div className="tableWrapper">
        <LoadWrapper isError={isError} isLoading={isLoading}>
          <TasksList tasks={tasks} />
        </LoadWrapper>
      </div>
    </section>
  );
};

export default TasksListPage;
