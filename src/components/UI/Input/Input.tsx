import { FC, ChangeEventHandler, memo } from "react";

import "./Input.scss";

interface IInputProps {
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  className?: string;
}

const Input: FC<IInputProps> = ({
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <span className="UIInput">
      <input
        type={"text"}
        value={value}
        className={`UIInputTextField ${className}`}
        onChange={onChange}
      />
      <span className={`UIInputPlaceholder${value ? " withValue" : ""}`}>
        {placeholder}
      </span>
    </span>
  );
};

export default memo(Input);
