import { FC } from "react";
import Section from "../../components/UI/Section/Section";
import Controllers from "../../components/ControllPanel/Controllers/Controllers";
import Tools from "../../components/ControllPanel/Tools/Tools";

const ControllPanelPage: FC = () => {
  return (
    <Section
      sectionTitle="Панель управления"
      className="page controllPanelPage"
    >
      <Controllers />
      <Tools className="toolsWrapper" />
    </Section>
  );
};

export default ControllPanelPage;
