import { ChangeEvent, FC } from "react";
import Input from "../../UI/Input/Input";
import { VscNewFile } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import ControllLink from "./ControllLink/ControllLink";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

import "./Controllers.scss";
import { setPassword } from "../../../store/tools/requestSlice";

const Controllers: FC = () => {
  const password = useAppSelector((state) => state.requestReduser);

  // const password = useAppSelector((state) => state.requestReduser.password);
  const dispatch = useAppDispatch();

  const updatePassword = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };

  return (
    <nav className="toolsControllers">
      <Input
        value={password}
        placeholder={"Пароль модератора"}
        onChange={updatePassword}
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
