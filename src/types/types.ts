export interface ITask {
  id: string;
  taskId: number;
  theme: string;
  title: string;
  text: string;
  answer: string;
}

export interface IFormData {
  title: string;
  theme: string;
  text: string;
  answer: string;
  password: string;
}
