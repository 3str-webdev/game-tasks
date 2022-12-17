export interface ITask {
  id: string;
  taskId: number;
  theme: string;
  title: string;
  text: string;
  answer: string;
}

type ToolsIFormData = IAddTaskFormData | {};

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
