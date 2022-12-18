import { configureStore } from "@reduxjs/toolkit";
import { tasksApi } from "./tasks/tasks.api";
import requestReduser from "./tools/requestSlice";

export const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer,
    requestReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
