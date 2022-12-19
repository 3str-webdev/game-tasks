import { FC } from "react";
import { IButtonProps } from "./Button.props";

import "./Button.scss";

const Button: FC<IButtonProps> = ({
  children,
  isLoading = false,
  className,
  ...props
}) => {
  return (
    <button
      className={`UIButton ${className}${isLoading ? " loading" : ""}`}
      disabled={isLoading}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
