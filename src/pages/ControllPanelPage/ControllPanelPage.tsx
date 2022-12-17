import { FC, useState } from "react";
import Section from "../../components/UI/Section/Section";
import Input from "../../components/UI/Input/Input";
import AddTaskTool from "../../components/ControllPanel/Tools/AddTaskTool/AddTaskTool";
import { IPostRequest } from "../../types/types";

const ControllPanelPage: FC = () => {
  const [request, setRequest] = useState<IPostRequest>({
    password: "",
    data: {},
  });

  return (
    <Section title="Панель управления" className="page controllPanelPage">
      <Input
        value={request.password}
        placeholder={"Пароль модератора"}
        onChange={(e) =>
          setRequest({ password: e.target.value, data: { ...request.data } })
        }
        className={"passwordInput"}
      />
      <section className="toolsWrapper"></section>
      <AddTaskTool request={request} />
    </Section>
  );
};

export default ControllPanelPage;
