import { HTMLAttributes } from "react";

export interface ILoaderProps extends HTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
}
