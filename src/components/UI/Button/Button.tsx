import { FC, ReactNode, MouseEventHandler } from "react";
import "./Button.scss";

interface ButtonProps {
  value: string | ReactNode;
  width?: string | number;
  height?: string | number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  value,
  width = "auto",
  height = "auto",
  onClick,
  className,
  isLoading = false,
}) => {
  return (
    <button
      className={`UIButton ${className}${isLoading ? " loading" : ""}`}
      style={{ width: width, height: height }}
      onClick={onClick}
      disabled={isLoading}
    >
      {value}
    </button>
  );
};

export default Button;
