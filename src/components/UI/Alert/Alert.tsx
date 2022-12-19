import { FC } from "react";
import { IoIosWarning } from "react-icons/io";
import { BiErrorAlt } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";

import { AlertVariants, IAlertProps } from "./Alert.props";

import "./Alert.scss";

const Alert: FC<IAlertProps> = ({
  message,
  variant = AlertVariants.normal,
  isShow = false,
  className,
  ...props
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
          <p>Success:</p>
        </>
      );
      break;
  }

  return (
    <>
      {isShow ? (
        <span className={`UIAlert ${variant} ${className}`} {...props}>
          <span className="UIAlertIconWrapper">{Icon}</span> <p>{message}</p>
        </span>
      ) : (
        ""
      )}
    </>
  );
};

export default Alert;
