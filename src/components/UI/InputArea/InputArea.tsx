import { FC } from "react";
import { IInputAreaProps } from "./InputArea.props";

import "./InputArea.scss";

const InputArea: FC<IInputAreaProps> = ({
  value,
  title,
  className,
  ...props
}) => {
  return (
    <div className={`UIInputAreaWrapper ${className}`}>
      <h5>{title}</h5>
      <textarea value={value} className={`UIInputArea`} {...props} />
    </div>
  );
};

export default InputArea;
