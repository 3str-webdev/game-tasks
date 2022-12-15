import { FC } from "react";
import { VscError } from "react-icons/vsc";

import "./Error.scss";

interface IError {
  errorMessage?: string;
}

const Error: FC<IError> = ({ errorMessage = "Что-то пошло не так..." }) => {
  return (
    <span className="UIError">
      <VscError size={26} /> <p>{errorMessage}</p>
    </span>
  );
};

export default Error;
