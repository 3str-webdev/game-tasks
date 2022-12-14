import { FC, ReactNode } from "react";
import "./Button.scss";

interface ButtonProps {
  value: string | ReactNode;
  props: any;
}

const Button: FC<ButtonProps> = ({ value, ...props }) => {
  return (
    <button {...props} className="UIButton">
      {value}
    </button>
  );
};

export default Button;
