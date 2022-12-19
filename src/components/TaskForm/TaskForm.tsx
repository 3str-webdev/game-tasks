import { FC, useState, useEffect, ChangeEvent } from "react";
import Input from "../UI/Input/Input";
import Alert, { AlertVariants } from "../UI/Alert/Alert";
import Button from "../UI/Button/Button";

import { useShowAlert } from "../../hooks/useShowAlert";
import { IAddTaskFormData } from "../../types/types";

import "./TaskForm.scss";

interface ITaskFormProps {
  defaultValue: IAddTaskFormData;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  submit: Function;
  alertMessages: {
    isError: string;
    isSuccess: string;
  };
  resetAfterSubmit?: boolean;
}

const TaskForm: FC<ITaskFormProps> = ({
  defaultValue,
  isError,
  isSuccess,
  isLoading,
  submit,
  alertMessages,
  resetAfterSubmit = true,
}) => {
  const [formData, setFormData] = useState<IAddTaskFormData>(defaultValue);

  const isShowErrorAlert = useShowAlert(isError);
  const isSuccessErrorAlert = useShowAlert(isSuccess);

  const updateFormData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isSuccess && resetAfterSubmit) {
      setFormData(defaultValue);
    }
  }, [isSuccess, defaultValue, resetAfterSubmit]);

  return (
    <>
      <section className="taskFormWrapper">
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
          onClick={() => submit(formData)}
        />

        <Alert
          isShow={isShowErrorAlert}
          message={alertMessages.isError}
          variant={AlertVariants.negative}
        />
        <Alert
          isShow={isSuccessErrorAlert}
          message={alertMessages.isSuccess}
          variant={AlertVariants.positive}
        />
      </section>
    </>
  );
};

export default TaskForm;
