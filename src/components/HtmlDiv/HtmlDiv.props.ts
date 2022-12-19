import { HTMLAttributes } from "react";

export interface IHtmlDivProps extends HTMLAttributes<HTMLDivElement> {
  content?: string;
}
