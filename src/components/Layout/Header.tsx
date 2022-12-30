import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { navigationLinks } from "../../routes/AppRoutes/links";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="react-header">
      <span className="projectLabel">
        <h2 className="projectName">Игровые задачи</h2>
        <div className="movingBg"></div>
      </span>

      <nav
        className={`navigate${isMenuOpen ? " active" : ""}`}
        onClick={closeMenu}
      >
        <ul className="list">
          {navigationLinks.map(({ to, title }) => {
            return (
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "link active" : "link"
                  }
                  to={to}
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className="burger" onClick={openMenu}></button>
    </header>
  );
};

export default Header;
