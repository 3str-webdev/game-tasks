import { FC, useEffect, useState } from "react";
import { ILoaderProps } from "./Loader.props";

import "./Loader.scss";

const Loader: FC<ILoaderProps> = ({ isLoading, className, ...props }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    let timout;
    if (isLoading) {
      timout = setTimeout(() => {
        setIsShow(true);
      }, 300);
    } else {
      setIsShow(false);
      clearTimeout(timout);
    }
  }, [isLoading]);

  return (
    <>
      {isShow ? <div className={`UILoader ${className}`} {...props}></div> : ""}
    </>
  );
};

export default Loader;
