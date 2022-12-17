import { FC } from "react";
import { IoIosWarning } from "react-icons/io";
import { BiErrorAlt } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";

import "./Alert.scss";

export enum AlertVariants {
  positive = "positive",
  negative = "negative",
  normal = "normal",
  warning = "warning",
}

interface IAlertProps {
  message: string;
  variant?: AlertVariants;
  isShow?: boolean;
}

const Alert: FC<IAlertProps> = ({
  message,
  variant = AlertVariants.normal,
  isShow = false,
}) => {
  let Icon;

  switch (variant) {
    case AlertVariants.normal:
      Icon = "PT";
      break;
    case AlertVariants.warning:
      Icon = (
        <>
          <span className="UIAlertIcon">
            <IoIosWarning />
          </span>
          <p>Warning:</p>
        </>
      );
      break;
    case AlertVariants.negative:
      Icon = (
        <>
          <span className="UIAlertIcon">
            <BiErrorAlt />
          </span>
          <p>Error:</p>
        </>
      );
      break;
    case AlertVariants.positive:
      Icon = (
        <>
          <span className="UIAlertIcon">
            <GrStatusGood />
          </span>
          <p>Error:</p>
        </>
      );
      break;
  }

  return (
    <>
      {isShow ? (
        <span className={`UIAlert ${variant}`}>
          <span className="UIAlertIconWrapper">{Icon}</span> <p>{message}</p>
        </span>
      ) : (
        ""
      )}
    </>
  );
};

export default Alert;
