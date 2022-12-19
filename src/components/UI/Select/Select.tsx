import { FC } from "react";
import { ISelectProps } from "./Select.props";
import "./Select.scss";

const Select: FC<ISelectProps> = ({
  children,
  variant = "background",
  className,
  ...props
}) => {
  return (
    <span className={`UISelect ${variant} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Select;
