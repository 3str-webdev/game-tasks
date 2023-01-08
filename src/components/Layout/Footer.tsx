import { FC } from "react";
import { BsGithub } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { usefulLinks } from "../../routes/FooterRoutes/links";
import { navigationLinks } from "../../routes/AppRoutes/links";

const Footer: FC = () => {
  return (
    <footer className="react-footer">
      <a
        target={"_blank"}
        href="https://github.com/3str-webdev/game-tasks"
        rel="noreferrer"
        className="gh-link"
      >
        <h2>
          <BsGithub size={"30px"} /> <p>Проект Игровые Задачи на GitHub</p>
        </h2>
      </a>
      <section className="foolerBlocks">
        <section className="navLinksWrapper footerBlock">
          <h3 className="title">Навигация</h3>
          <div className="links">
            {navigationLinks.map(({ to, title }) => {
              return (
                <NavLink key={to} to={to} className="link">
                  {title}
                </NavLink>
              );
            })}
          </div>
        </section>

        <section className="usefulLinksWrapper footerBlock">
          <h3 className="title">Полезные ссылки</h3>
          <div className="links">
            {usefulLinks.map(({ to, title }) => {
              return (
                <NavLink key={to} to={to} className="link">
                  {title}
                </NavLink>
              );
            })}
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
