import { ReactNode } from "react";

export interface ILink {
  to: string;
  title: string;
}

export interface IRoute {
  path: string;
  element: ReactNode;
}
