import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPostRequest, ITask } from "../../types/types";

enum BaseUrlMode {
  dev = "http://localhost:7000/api/",
  prod = "Some url",
}

export const tasksApi = createApi({
  reducerPath: "tasks/api",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrlMode.dev,
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
  }),
});

export const {
  useGetAllTasksQuery,
  useLazyGetAllTasksQuery,
  useGetTaskByIdQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
