import { HTMLAttributes } from "react";
import { ITask } from "../../../types/types";

export interface ITasksListHeader {
  isShow: boolean;
}

export interface ITasksList extends HTMLAttributes<HTMLDivElement> {
  tasks: ITask[] | undefined;
  withHeader?: boolean;
}
