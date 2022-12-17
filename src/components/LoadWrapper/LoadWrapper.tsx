import { FC, ReactNode, useEffect, useState } from "react";
import Error from "../UI/Error/Error";
import Loader from "../UI/Loader/Loader";

interface ILoadWrapper {
  isLoading: boolean;
  isError: boolean;
  children: ReactNode;
}

const LoadWrapper: FC<ILoadWrapper> = ({ isLoading, isError, children }) => {
  const [showedComponent, setShowedComponent] = useState(<></>);
  useEffect(() => {
    if (isError === true) {
      setShowedComponent(<Error />);
    } else if (isLoading === true) {
      setShowedComponent(<Loader isLoading={isLoading} />);
    } else {
      setShowedComponent(<>{children}</>);
    }
  }, [isError, isLoading, children]);

  return <>{showedComponent}</>;
};

export default LoadWrapper;
