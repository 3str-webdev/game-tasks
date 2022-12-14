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
  titleProps?: Object;
  contentProps?: Object;
}

const Section: FC<SectionProps> = ({
  title,
  children,
  variant = SectionVariants.single,
  titleProps,
  contentProps,
  ...props
}) => {
  return (
    <section className={`UISection ${variant}`} {...props}>
      <h3 className="UISectionTitle" {...titleProps}>
        {title}
      </h3>
      <div className="UISectionContent" {...contentProps}>
        {children}
      </div>
    </section>
  );
};

export default Section;
