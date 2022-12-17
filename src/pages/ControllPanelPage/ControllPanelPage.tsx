import { FC, useState } from "react";
import Section from "../../components/UI/Section/Section";
import { IPostRequest } from "../../types/types";
import Controllers from "../../components/ControllPanel/Controllers/Controllers";
import { useParams } from "react-router-dom";
import Tools from "../../components/ControllPanel/Tools/Tools";

const ControllPanelPage: FC = () => {
  const toolTitle = useParams().tool;
  const [request, setRequest] = useState<IPostRequest>({
    password: "",
    data: {},
  });

  return (
    <Section title="Панель управления" className="page controllPanelPage">
      <Controllers request={request} setRequest={setRequest} />
      <Tools className="toolsWrapper" toolTitle={toolTitle} request={request} />
    </Section>
  );
};

export default ControllPanelPage;
