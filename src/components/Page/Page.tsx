import { FC, useRef, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ContactPage from "../../pages/ContactPage/ContactPage";
import ControllPanelPage from "../../pages/ControllPanelPage/ControllPanelPage";
import HomePage from "../../pages/HomePage/HomePage";
import TaskPage from "../../pages/TaskPage/TaskPage";
import TasksListPage from "../../pages/TasksListPage/TasksListPage";

const Page: FC = () => {
  const topRef = useRef<HTMLHRElement>(null);
  const location = useLocation().pathname;

  const scrollToTop = () => {
    if (topRef.current) topRef.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <>
      <hr id="topPosition" ref={topRef} />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/tasks" element={<TasksListPage />} />
        <Route path="/tasks/:taskId" element={<TaskPage />} />
        <Route path="/tasks/panel/*" element={<ControllPanelPage />} />
        <Route path="/contactus" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default Page;
