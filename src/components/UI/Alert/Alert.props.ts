import { HTMLAttributes } from "react";

export enum AlertVariants {
  positive = "positive",
  negative = "negative",
  normal = "normal",
  warning = "warning",
}

export interface IAlertProps extends HTMLAttributes<HTMLSpanElement> {
  message: string;
  variant?: AlertVariants;
  isShow?: boolean;
}
