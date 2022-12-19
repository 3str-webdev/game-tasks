import { FC, useEffect, useState, ChangeEvent } from "react";
import LoadWrapper from "../../components/LoadWrapper/LoadWrapper";
import Input from "../../components/UI/Input/Input";
import Section from "../../components/UI/Section/Section";
import TasksList from "../../components/UI/TasksList/TasksList";

import { useGetAllTasksQuery } from "../../store/tasks/tasks.api";
import { ITask } from "../../types/types";

const TasksListPage: FC = () => {
  const { isError, isLoading, data: tasksData } = useGetAllTasksQuery();

  const [tasksList, setTasksList] = useState<ITask[] | undefined>(undefined);
  const [searchValue, setSearchValue] = useState<string>("");

  const searchTasks = (search: string) => {
    setSearchValue(search);
    if (search === "") {
      setTasksList(tasksData);
      return;
    }

    setTasksList(
      tasksList?.filter((task: ITask) => {
        if (task.taskId === +search) {
          return true;
        } else if (
          task.theme.toLowerCase().indexOf(search.toLowerCase()) >= 0
        ) {
          return true;
        } else if (
          task.title.toLowerCase().indexOf(search.toLowerCase()) >= 0
        ) {
          return true;
        }
        return false;
      })
    );
  };

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    searchTasks(e.target.value);
  };

  useEffect(() => {
    setTasksList(tasksData);
  }, [tasksData]);

  return (
    <section className="page tasksListPage">
      <Section sectionTitle="Задачи">
        <div>
          На этой странице вы можете познакомиться со списком задач, доступных
          для пользователей. Мы постоянно расширяем каталог новыми темами и
          задачами для Вас
        </div>
      </Section>
      <div className="tableWrapper">
        <div className="searchInputWrapper">
          <Input
            value={searchValue}
            placeholder="Введите название, тему или номер задачи"
            onChange={searchHandler}
          />
        </div>
        <LoadWrapper isError={isError} isLoading={isLoading}>
          <TasksList tasks={tasksList} />
        </LoadWrapper>
      </div>
    </section>
  );
};

export default TasksListPage;
