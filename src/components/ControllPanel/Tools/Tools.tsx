import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddTaskTool from "./AddTaskTool/AddTaskTool";
import DeleteTasksTool from "./DeleteTasksTool/DeleteTasksTool";
import EditTaskTool from "./EditTaskTool/EditTaskTool";

interface IToolsProps {
  className?: string;
}

const Tools: FC<IToolsProps> = ({ className }) => {
  return (
    <section className={className}>
      <Routes>
        <Route path="/" element={<Navigate to={"addTask"} />} />
        <Route path="/addTask" element={<AddTaskTool />} />
        <Route path="/deleteTasks" element={<DeleteTasksTool />} />
        <Route path="/editTask/*" element={<EditTaskTool />}></Route>
      </Routes>
    </section>
  );
};

export default Tools;
