import { FC } from "react";
import { ISectionProps } from "./Section.props";

import "./Section.scss";

const Section: FC<ISectionProps> = ({
  sectionTitle,
  children,
  variant = "single",
  className,
  ...props
}) => {
  return (
    <section className={`UISection ${variant} ${className}`} {...props}>
      <h3 className="UISectionTitle">{sectionTitle}</h3>
      <div className="UISectionContent">{children}</div>
    </section>
  );
};

export default Section;
