import { useEffect, useState } from "react";

export const useShowAlert = (flag: boolean): boolean => {
  const [isShowAlert, setIsShowAlert] = useState<boolean>(false);

  useEffect(() => {
    if (flag) {
      setIsShowAlert(true);
      setTimeout(() => {
        setIsShowAlert(false);
      }, 3000);
    }
  }, [flag]);

  return isShowAlert;
};
