import { RefObject, useState, useEffect } from "react";
import { defaultSelectionData, ISelectionData } from "../types/editorTypes.d";
import { useGetCursorPos } from "./useGetCursorPos";

export const useGetSelectedText = (ref: RefObject<HTMLTextAreaElement>) => {
  const [selectionData, setSelectionData] =
    useState<ISelectionData>(defaultSelectionData);

  const cursorPos = useGetCursorPos(ref);

  useEffect(() => {
    const getSelectedText = () => {
      if (document.activeElement === ref.current) {
        const textContent = ref.current?.textContent;
        const start = ref.current?.selectionStart ?? 0;
        const end = ref.current?.selectionEnd ?? 0;
        const text = textContent?.substring(start, end) ?? "";

        setSelectionData((prev) => ({
          start,
          end,
          text,
        }));
      } else {
        setSelectionData(defaultSelectionData);
      }
    };

    document.addEventListener("selectionchange", getSelectedText);

    return () => {
      document.removeEventListener("selectionchange", getSelectedText);
    };
  }, [ref]);

  return { cursorPos, selectionData };
};
