import { HTMLAttributes } from "react";
import { ITask } from "../../../../types/types";

export interface ITaskItemProps extends HTMLAttributes<HTMLElement> {
  task: ITask;
}
