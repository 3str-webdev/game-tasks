import { FC } from "react";
import { IPostRequest } from "../../../types/types";
import AddTaskTool from "./AddTaskTool/AddTaskTool";

interface IToolsProps {
  className?: string;
  toolTitle: string | undefined;
  request: IPostRequest;
}

const Tools: FC<IToolsProps> = ({ className, toolTitle, request }) => {
  let tool = <></>;

  switch (toolTitle) {
    case "addTask":
      tool = <AddTaskTool request={request} />;
      break;
  }
  return <section className={className}>{tool}</section>;
};

export default Tools;
