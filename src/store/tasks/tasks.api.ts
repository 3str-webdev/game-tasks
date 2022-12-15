import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITask } from "../../types/types";

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
      query: (taskId: number) => ({
        url: `/tasks/get/${taskId}`,
      }),
    }),
  }),
});

export const { useGetAllTasksQuery, useGetTaskByIdQuery } = tasksApi;
