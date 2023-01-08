import { HTMLAttributes } from "react";

export interface IEditorProps extends HTMLAttributes<HTMLTextAreaElement> {
  value: string;
  title: string;
}
