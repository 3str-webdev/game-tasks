import { IAddTaskFormData } from "../../types/types";

export interface ITaskFormProps {
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
