import { FC, ReactNode } from "react";

import "./Section.scss";

export enum SectionVariants {
  single = "single",
  twice = "twice",
}

interface SectionProps {
  title: string;
  children: ReactNode;
  variant?: SectionVariants;
  className?: string;
}

const Section: FC<SectionProps> = ({
  title,
  children,
  variant = SectionVariants.single,
  className,
}) => {
  return (
    <section className={`UISection ${variant} ${className}`}>
      <h3 className="UISectionTitle">{title}</h3>
      <div className="UISectionContent">{children}</div>
    </section>
  );
};

export default Section;
