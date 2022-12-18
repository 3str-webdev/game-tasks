import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AddTaskTool from "./AddTaskTool/AddTaskTool";
import DeleteTasksTool from "./DeleteTasksTool/DeleteTasksTool";

interface IToolsProps {
  className?: string;
}

const Tools: FC<IToolsProps> = ({ className }) => {
  return (
    <section className={className}>
      <Routes>
        <Route path="/addTask" element={<AddTaskTool />} />
        <Route path="/deleteTasks" element={<DeleteTasksTool />} />
      </Routes>
    </section>
  );
};

export default Tools;
