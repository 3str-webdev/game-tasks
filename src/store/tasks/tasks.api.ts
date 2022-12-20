import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPostRequest, ITask } from "../../types/types";

enum BaseUrlMode {
  dev = "http://localhost:7000/api/",
  prod = "https://game-tasks-server.onrender.com/api/",
}

export const tasksApi = createApi({
  reducerPath: "tasks/api",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrlMode.prod,
  }),
  endpoints: (build) => ({
    getAllTasks: build.query<ITask[], void>({
      query: () => ({
        url: "/tasks/getAll",
      }),
    }),

    getTaskById: build.query<ITask, number | string>({
      query: (taskId: number | string) => ({
        url: `/tasks/get/${taskId}`,
        crossDomain: true,
        responseType: "json",
      }),
    }),

    addTask: build.mutation<ITask, IPostRequest>({
      query: (request) => ({
        url: "/tasks/add",
        method: "POST",
        body: request,
        crossDomain: true,
        responseType: "json",
      }),
    }),

    deleteTask: build.mutation<ITask[], IPostRequest>({
      query: (request) => ({
        url: "/tasks/delete",
        method: "DELETE",
        body: request,
        crossDomain: true,
        responseType: "json",
      }),
    }),

    updateTask: build.mutation<ITask[], IPostRequest>({
      query: (request) => ({
        url: "/tasks/update",
        method: "PUT",
        body: request,
        crossDomain: true,
        responseType: "json",
      }),
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useLazyGetAllTasksQuery,
  useGetTaskByIdQuery,
  useLazyGetTaskByIdQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = tasksApi;
