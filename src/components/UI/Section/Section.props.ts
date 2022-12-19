import { HTMLAttributes, ReactNode } from "react";

type SectionVariant = "single" | "twice";

export interface ISectionProps extends HTMLAttributes<HTMLElement> {
  sectionTitle: string | ReactNode;
  variant?: SectionVariant;
}
