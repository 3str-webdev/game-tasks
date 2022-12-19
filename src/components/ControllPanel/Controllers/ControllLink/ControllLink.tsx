import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IControllLink } from "./ControllLink.props";

import "./ControllLink.scss";

const ControllLink: FC<IControllLink> = ({
  icon,
  title,
  path,
  className,
  ...props
}) => {
  const defaultClassName = `controllLinkWrapper ${className}`;
  const activeClassName = `controllLinkWrapper ${className} active`;

  return (
    <NavLink
      to={path}
      className={(navData) =>
        navData.isActive ? activeClassName : defaultClassName
      }
      {...props}
    >
      <div className="controllLink">
        <span className="controllerIcon">{icon}</span>
        <p className="controllerTitle">{title}</p>
      </div>
    </NavLink>
  );
};

export default ControllLink;
