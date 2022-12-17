import { ChangeEvent, FC, useState } from "react";
import Alert, { AlertVariants } from "../../components/UI/Alert/Alert";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Section from "../../components/UI/Section/Section";

import { useAddTaskMutation } from "../../store/tasks/tasks.api";
import { useShowAlert } from "../../hooks/useShowAlert";

import { IFormData } from "../../types/types";

const defaultFormData: IFormData = {
  title: "",
  theme: "",
  text: "",
  answer: "",
  password: "",
};

const ControllPanelPage: FC = () => {
  const [formData, setFormData] = useState<IFormData>(defaultFormData);
  const [addTask, { isError, isLoading, isSuccess }] =
    useAddTaskMutation();
  const isShowErrorAlert = useShowAlert(isError);
  const isSuccessErrorAlert = useShowAlert(isSuccess);

  const updateFormData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ): void => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const submit = () => {
    // TODO: Validation
    addTask(formData);
  };

  return (
    <Section title="Панель управления" className="page controllPanelPage">
      <section className="formWrapper">
        <Input
          value={formData.password}
          placeholder={"Пароль модератора"}
          onChange={(e) => updateFormData(e, "password")}
          className={"passwordInput"}
        />
        <div className="inlineFields">
          <Input
            value={formData.title}
            placeholder="Название задачи"
            onChange={(e) => updateFormData(e, "title")}
          />

          <Input
            value={formData.theme}
            placeholder="Тема задачи"
            onChange={(e) => updateFormData(e, "theme")}
          />
        </div>
        <div className="editorWrapper">
          <h5>Текст задачи</h5>
          <textarea
            value={formData.text}
            className="textArea taskText"
            onChange={(e) => updateFormData(e, "text")}
          />
        </div>
        <div className="editorWrapper">
          <h5>Ответ</h5>
          <textarea
            value={formData.answer}
            className="textArea taskAnswer"
            onChange={(e) => updateFormData(e, "answer")}
          />
        </div>
        <Button
          value={"Отправить"}
          className={"submitBtn"}
          isLoading={isLoading}
          onClick={submit}
        />

        <Alert
          isShow={isShowErrorAlert}
          message={`Ошибка при добавлении задачи`}
          variant={AlertVariants.negative}
        />
        <Alert
          isShow={isSuccessErrorAlert}
          message="Задача успешно добавлена"
          variant={AlertVariants.positive}
        />
      </section>
    </Section>
  );
};

export default ControllPanelPage;
