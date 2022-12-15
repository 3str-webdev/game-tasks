import { FC, ChangeEventHandler } from "react";

import "./Input.scss";

interface IInputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input: FC<IInputProps> = ({ placeholder, value, onChange }) => {
  return (
    <span className="UIInput">
      <input
        type={"text"}
        value={value}
        className={"UIInputTextField"}
        onChange={onChange}
      />
      <span className="UIInputPlaceholder">{placeholder}</span>
    </span>
  );
};

export default Input;
