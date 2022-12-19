import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import EditTaskForm from "./EditTaskForm/EditTaskForm";
import EditTaskList from "./EditTaskList/EditTaskList";

const EditTaskTool: FC = () => {
    
  return (
    <>
      <Routes>
        <Route index element={<EditTaskList />} />
        <Route path=":taskId" element={<EditTaskForm />} />
      </Routes>
    </>
  );
};

export default EditTaskTool;
