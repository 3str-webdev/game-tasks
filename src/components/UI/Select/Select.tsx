import { FC, ReactNode } from "react";
import "./Select.scss";

interface SelectProps {
  children: ReactNode;
  variant?: "background" | "underline";
}

const Select: FC<SelectProps> = ({
  children,
  variant = "background",
}) => {
  return (
    <span className={`UISelect ${variant}`}>
      {children}
    </span>
  );
};

export default Select;
