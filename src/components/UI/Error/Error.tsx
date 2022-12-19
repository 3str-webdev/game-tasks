import { FC } from "react";
import { VscError } from "react-icons/vsc";
import { IErrorProps } from "./Error.props";

import "./Error.scss";

const Error: FC<IErrorProps> = ({
  message = "Что-то пошло не так...",
  className,
  ...props
}) => {
  return (
    <span className={`UIError ${className}`} {...props}>
      <VscError size={26} /> <p>{message}</p>
    </span>
  );
};

export default Error;
