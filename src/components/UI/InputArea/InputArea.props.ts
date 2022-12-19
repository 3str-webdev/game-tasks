import { HTMLAttributes } from "react";

export interface IInputAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  value: string;
  title: string;
}
