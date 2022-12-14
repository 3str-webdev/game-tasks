import { IRequest, MethodVariants } from "../types/requestType";

export enum ServerAddres {
  dev = "http://localhost:7001",
}

const server = ServerAddres.dev;

export const getTasksRequest: IRequest = {
  method: MethodVariants.get,
  url: `${server}/api/tasks/getAll`,
};
