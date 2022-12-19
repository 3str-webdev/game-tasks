import { HTMLAttributes } from "react";

export interface IErrorProps extends HTMLAttributes<HTMLSpanElement> {
  message?: string;
}
