import { ReactNode } from "react";

interface IListProps<T> {
  items: T[] | undefined;
  renderItem: (item: T) => ReactNode;
}

export default function List<T>({ items, renderItem }: IListProps<T>) {
  return <>{items?.map(renderItem)}</>;
}
