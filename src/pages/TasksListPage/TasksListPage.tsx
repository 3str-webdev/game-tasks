import { FC } from "react";
import Loader from "../../components/UI/Loader/Loader";
import Section from "../../components/UI/Section/Section";
import TasksList from "../../components/UI/TasksList/TasksList";
import { VscError } from "react-icons/vsc";

import { useFetch } from "../../hooks/useFetch";
import { getTasksRequest } from "../../requests/requests";
import { ITask } from "../../types/taskType";

const TasksListPage: FC = () => {
  const { response, isLoading, error } = useFetch<ITask[]>(getTasksRequest);

  return (
    <section className="page tasksListPage">
      <Section title="Задачи">
        <div>
          На этой странице вы можете познакомиться со списком задач, доступных
          для пользователей. Мы постоянно расширяем каталог новыми темами и
          задачами для Вас
        </div>
      </Section>

      <section className="tableWrapper">
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : error ? (
          <div className="errorMessage">
            <VscError size={26} /> Что-то пошло не так...
          </div>
        ) : (
          <TasksList tasks={response} />
        )}
      </section>
    </section>
  );
};

export default TasksListPage;
