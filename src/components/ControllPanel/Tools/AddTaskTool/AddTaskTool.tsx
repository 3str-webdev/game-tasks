import { FC, useState, useEffect, ChangeEvent } from "react";
import Input from "../../../UI/Input/Input";
import Alert, { AlertVariants } from "../../../UI/Alert/Alert";
import Button from "../../../UI/Button/Button";

import { useAddTaskMutation } from "../../../../store/tasks/tasks.api";
import { useShowAlert } from "../../../../hooks/useShowAlert";

import { IAddTaskFormData, DAddTaskFormData } from "../../../../types/types";

import "./AddTaskTool.scss";
import { useAppSelector } from "../../../../hooks/redux";

const AddTaskTool: FC = () => {
  const [addTask, { isError, isLoading, isSuccess }] = useAddTaskMutation();
  const isShowErrorAlert = useShowAlert(isError);
  const isSuccessErrorAlert = useShowAlert(isSuccess);

  const [formData, setFormData] = useState<IAddTaskFormData>(DAddTaskFormData);

  const moderatorPassrord = useAppSelector((state) => state.requestReduser);

  const updateFormData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const submit = () => {
    // TODO: Validation

    addTask({ password: moderatorPassrord, data: formData });
  };

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setFormData(DAddTaskFormData);
    }
  }, [isLoading]);

  return (
    <>
      <section className="formWrapper">
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
    </>
  );
};

export default AddTaskTool;
