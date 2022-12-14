import { FC, useEffect, useState } from "react";

import "./Loader.scss";

interface ILoaderProps {
  isLoading: boolean;
}

const Loader: FC<ILoaderProps> = ({ isLoading }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    let timout;
    if (isLoading) {
      timout = setTimeout(() => {
        setIsShow(true);
      }, 400);
    } else {
      setIsShow(false);
      clearTimeout(timout);
    }
  }, [isLoading]);

  return <>{isShow ? <div className="UILoader"></div> : ""}</>;
};

export default Loader;
