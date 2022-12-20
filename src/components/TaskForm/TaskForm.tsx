import { FC, useState, useEffect, ChangeEvent } from "react";
import Input from "../UI/Input/Input";
import Alert from "../UI/Alert/Alert";
import { AlertVariants } from "../UI/Alert/Alert.props";
import Button from "../UI/Button/Button";
import InputArea from "../UI/InputArea/InputArea";

import { useShowAlert } from "../../hooks/useShowAlert";
import { IAddTaskFormData } from "../../types/types";
import { ITaskFormProps } from "./TaskForm.props";

import "./TaskForm.scss";

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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateFormData(e, "title")
            }
          />

          <Input
            value={formData.theme}
            placeholder="Тема задачи"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateFormData(e, "theme")
            }
          />
        </div>
        <InputArea
          title="Текст задачи"
          value={formData.text}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            updateFormData(e, "text")
          }
          className="editor"
        />
        <InputArea
          title="Ответ"
          value={formData.answer}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            updateFormData(e, "answer")
          }
          className="editor"
        />

        <Button
          className={"submitBtn"}
          isLoading={isLoading}
          onClick={() => submit(formData)}
        >
          Отправить
        </Button>

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
