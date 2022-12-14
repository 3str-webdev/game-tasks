import { FC, ReactNode } from "react";
import "./Select.scss";

interface SelectProps {
  children: ReactNode;
  variant?: "background" | "underline";
}

const Select: FC<SelectProps> = ({
  children,
  variant = "background",
  ...props
}) => {
  return (
    <span className={`UISelect ${variant}`} {...props}>
      {children}
    </span>
  );
};

export default Select;
