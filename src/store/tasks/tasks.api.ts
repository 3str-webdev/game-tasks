import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPostRequest, ITask } from "../../types/types";

enum BaseUrlMode {
  dev = "http://localhost:4001/api/",
  prod = "https://game-tasks-server.onrender.com/api/",
}

export const tasksApi = createApi({
  reducerPath: "tasks/api",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrlMode.prod,
  }),
  tagTypes: ["Tasks"],
  endpoints: (build) => ({
    getAllTasks: build.query<ITask[], void>({
      query: () => ({
        url: "/tasks/getAll",
      }),
      providesTags: (result) => ["Tasks"],
    }),

    getTaskById: build.query<ITask, number | string>({
      query: (taskId: number | string) => ({
        url: `/tasks/get/${taskId}`,
        crossDomain: true,
        responseType: "json",
      }),
      providesTags: (result) => ["Tasks"],
    }),

    addTask: build.mutation<ITask, IPostRequest>({
      query: (request) => ({
        url: "/tasks/add",
        method: "POST",
        body: request,
        crossDomain: true,
        responseType: "json",
      }),
      invalidatesTags: ["Tasks"],
    }),

    deleteTask: build.mutation<ITask[], IPostRequest>({
      query: (request) => ({
        url: "/tasks/delete",
        method: "DELETE",
        body: request,
        crossDomain: true,
        responseType: "json",
      }),
      invalidatesTags: ["Tasks"],
    }),

    updateTask: build.mutation<ITask[], IPostRequest>({
      query: (request) => ({
        url: "/tasks/update",
        method: "PUT",
        body: request,
        crossDomain: true,
        responseType: "json",
      }),
      invalidatesTags: ["Tasks"],
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
