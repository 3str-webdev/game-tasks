import { IRoute } from "../types";
import {
  ContactPage,
  ControllPanelPage,
  HomePage,
  TaskPage,
  TasksListPage,
} from "../../pages";

export const appRoutes: IRoute[] = [
  { path: "/", element: <HomePage /> },
  { path: "/tasks", element: <TasksListPage /> },
  { path: "/tasks/:taskId", element: <TaskPage /> },
  { path: "/contactus", element: <ContactPage /> },
  { path: "/tasks/panel/*", element: <ControllPanelPage /> },
];
