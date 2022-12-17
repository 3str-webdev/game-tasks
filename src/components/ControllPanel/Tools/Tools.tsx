import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { IPostRequest } from "../../../types/types";
import AddTaskTool from "./AddTaskTool/AddTaskTool";
import DeleteTasksTool from "./DeleteTasksTool/DeleteTasksTool";

interface IToolsProps {
  className?: string;
  request: IPostRequest;
}

const Tools: FC<IToolsProps> = ({ className, request }) => {
  return (
    <section className={className}>
      <Routes>
        <Route path="/addTask" element={<AddTaskTool request={request} />} />
        <Route
          path="/deleteTasks"
          element={<DeleteTasksTool request={request} />}
        />
      </Routes>
    </section>
  );
};

export default Tools;
