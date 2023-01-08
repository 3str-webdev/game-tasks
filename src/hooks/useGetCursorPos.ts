import { useState, RefObject, useEffect } from "react";

type ObjectsWithCursorPos = HTMLTextAreaElement | HTMLInputElement;

export const useGetCursorPos = (
  ref: RefObject<ObjectsWithCursorPos>
): number => {
  const [cursorPos, setCursorPos] = useState<number>(0);

  useEffect(() => {
    if (ref.current?.selectionStart) setCursorPos(ref.current?.selectionStart);
  }, [ref.current?.selectionStart, ref]);

  return cursorPos;
};
