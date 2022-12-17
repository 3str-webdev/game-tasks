import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

import "./ControllLink.scss";

interface IControllLink {
  icon: ReactNode;
  title: string;
  path: string;
}

const ControllLink: FC<IControllLink> = ({ icon, title, path }) => {
  return (
    <NavLink
      to={path}
      className={(navData) =>
        navData.isActive ? "controllLinkWrapper active" : "controllLinkWrapper"
      }
    >
      <div className="controllLink">
        <span className="controllerIcon">{icon}</span>
        <p className="controllerTitle">{title}</p>
      </div>
    </NavLink>
  );
};

export default ControllLink;
