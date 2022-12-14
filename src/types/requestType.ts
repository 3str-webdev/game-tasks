export enum MethodVariants {
  get = "GET",
  post = "POST",
  put = "PUT",
  delete = "DELETE",
}

export interface IRequest {
  method: MethodVariants;
  url: string;
}
