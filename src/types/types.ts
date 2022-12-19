export interface ITask {
  id: string;
  taskId: number;
  theme: string;
  title: string;
  text: string;
  answer: string;
}

export type ToolsIFormData =
  | IAddTaskFormData
  | IDeleteTasksData
  | IEditTaskData;

export interface IPostRequest {
  password: string;
  data: ToolsIFormData;
}

export interface IAddTaskFormData {
  title: string;
  theme: string;
  text: string;
  answer: string;
}

export const DAddTaskFormData: IAddTaskFormData = {
  title: "",
  theme: "",
  text: "",
  answer: "",
};

export interface IEditTaskData {
  taskId: string | number;
  title: string;
  theme: string;
  text: string;
  answer: string;
}

export interface IDeleteTasksData {
  taskId: string | number;
}
