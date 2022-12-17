import { FC } from "react";
import { IPostRequest } from "../../../types/types";
import Input from "../../UI/Input/Input";
import { VscNewFile } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";

import "./Controllers.scss";
import ControllLink from "./ControllLink/ControllLink";

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
        <ControllLink
          icon={<VscNewFile />}
          title={"Добавить"}
          path={"/tasks/panel/addTask"}
        />
        <ControllLink
          icon={<VscTrash />}
          title={"Удалить"}
          path={"/tasks/panel/deleteTasks"}
        />
      </ul>
    </nav>
  );
};

export default Controllers;
