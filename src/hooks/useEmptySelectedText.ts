import { useEffect, useState } from "react";

export const useEmptySelectedText = (callback: Function) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    const checkSelectedTextLength = () => {
      if (window.getSelection.toString() === "") {
        callback();
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
      }
    };

    document.addEventListener("selectionchange", checkSelectedTextLength);

    return () => {
      document.removeEventListener("selectionchange", checkSelectedTextLength);
    };
  }, [callback]);

  return isEmpty;
};
