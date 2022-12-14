import { FC } from "react";
import Select from "../UI/Select/Select";
import { BsGithub } from "react-icons/bs";

const Footer: FC = () => {
  return (
    <footer className="react-footer">
      <Select variant={"underline"}>
        <a
          target={"_blank"}
          href="https://github.com/3str-webdev/game-tasks"
          rel="noreferrer"
        >
          <h2>
            <BsGithub size={"30px"} /> <p>Проект Игровые Задачи на GitHub</p>
          </h2>
        </a>
      </Select>
    </footer>
  );
};

export default Footer;
