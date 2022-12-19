import { HTMLAttributes } from "react";

export interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value: string;
}
