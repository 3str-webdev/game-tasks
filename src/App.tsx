import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import TaskPage from "./pages/TaskPage/TaskPage";
import TasksListPage from "./pages/TasksListPage/TasksListPage";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/tasks" element={<TasksListPage />} />
          <Route path="/tasks/:taskId" element={<TaskPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
