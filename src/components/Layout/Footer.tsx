import { FC } from "react";
import { BsGithub } from "react-icons/bs";
import { NavLink } from "react-router-dom";

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
            <NavLink to={"/"} className="link">
              Главная
            </NavLink>
            <NavLink to={"/tasks"} className="link">
              Задачи
            </NavLink>
          </div>
        </section>

        <section className="usefulLinksWrapper footerBlock">
          <h3 className="title">Полезные ссылки</h3>
          <div className="links">
            <NavLink to={"/tasks/panel"} className="link">
              Панель управления
            </NavLink>
            <NavLink to={"/contactus"} className="link">
              Контакты
            </NavLink>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
