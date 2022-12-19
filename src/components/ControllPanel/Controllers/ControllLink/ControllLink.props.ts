import { ReactNode, HTMLAttributes } from "react";

export interface IControllLink extends HTMLAttributes<HTMLElement> {
  icon: ReactNode;
  title: string;
  path: string;
}
