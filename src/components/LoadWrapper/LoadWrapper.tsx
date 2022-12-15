import { FC, ReactNode } from "react";
import Error from "../UI/Error/Error";
import Loader from "../UI/Loader/Loader";

interface ILoadWrapper {
  isLoading: boolean;
  isError: boolean;
  children: ReactNode;
}

const LoadWrapper: FC<ILoadWrapper> = ({ isLoading, isError, children }) => {
  if (isError === true) {
    return <Error />;
  } else if (isLoading === true) {
    return <Loader isLoading={isLoading} />;
  } else {
    return <>{children}</>;
  }
};

export default LoadWrapper;
