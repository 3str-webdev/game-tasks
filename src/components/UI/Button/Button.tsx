import { FC, ReactNode, MouseEventHandler } from "react";
import "./Button.scss";

interface ButtonProps {
  value: string | ReactNode;
  width?: string | number;
  height?: string | number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
  value,
  width = "auto",
  height = "auto",
  onClick,
}) => {
  return (
    <button
      className="UIButton"
      style={{ width: width, height: height }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
