import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ContactPage from "./pages/ContactPage/ContactPage";
import ControllPanelPage from "./pages/ControllPanelPage/ControllPanelPage";
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
          <Route path="/tasks/panel/*" element={<ControllPanelPage />} />
          <Route path="/contactus" element={<ContactPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
