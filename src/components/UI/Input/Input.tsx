import { FC, memo } from "react";
import { IInputProps } from "./Input.props";

import "./Input.scss";

const Input: FC<IInputProps> = ({
  placeholder,
  className,
  value,
  ...props
}) => {
  return (
    <span className="UIInput">
      <input
        type={"text"}
        className={`UIInputTextField ${className}`}
        value={value}
        {...props}
      />
      <span className={`UIInputPlaceholder${value ? " withValue" : ""}`}>
        {placeholder}
      </span>
    </span>
  );
};

export default memo(Input);
