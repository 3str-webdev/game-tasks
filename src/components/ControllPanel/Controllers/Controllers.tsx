import { FC } from "react";
import { IPostRequest } from "../../../types/types";
import Input from "../../UI/Input/Input";
import { NavLink } from "react-router-dom";
import { VscNewFile } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";

import "./Controllers.scss";

interface IToolsControllers {
  request: IPostRequest;
  setRequest: Function;
}

const Controllers: FC<IToolsControllers> = ({ request, setRequest }) => {
  return (
    <nav className="toolsControllers">
      <Input
        value={request.password}
        placeholder={"Пароль модератора"}
        onChange={(e) =>
          setRequest({ password: e.target.value, data: { ...request.data } })
        }
        className={"passwordInput"}
      />
      <ul>
        <NavLink
          to={"/tasks/panel/addTask"}
          className={(navData) => (navData.isActive ? "link active" : "link")}
        >
          <li>
            <span className="controllerIcon">
              <VscNewFile />
            </span>
            <p className="controllerTitle">Добавить</p>
          </li>
        </NavLink>

        <NavLink
          to={"/tasks/panel/deleteTask"}
          className={(navData) => (navData.isActive ? "link active" : "link")}
        >
          <li>
            <span className="controllerIcon">
              <VscTrash />
            </span>
            <p className="controllerTitle">Удалить</p>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Controllers;
