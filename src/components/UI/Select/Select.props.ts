import { ReactNode, HTMLAttributes } from "react";

type SelectVariants = "background" | "underline";

export interface ISelectProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: SelectVariants;
}
