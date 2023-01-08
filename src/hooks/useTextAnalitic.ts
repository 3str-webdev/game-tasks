import { useEffect, RefObject, useCallback } from "react";
import { convertTwiceRegExpData } from "../packages/convertRegExpDataToRegExp";
import {
  defaultEditorToolsList,
  IEditorToolsList,
  IEditorTwiceRegExp,
} from "../types/editorTypes.d";
import { isCursorBetweenStrings } from "../utils";
import { useGetSelectedText } from "./useGetSelectedText";

export const useAnalitic = (
  ref: RefObject<HTMLTextAreaElement>,
  setActiveTool: Function,
  setToolsStateList: Function
): void => {
  const { selectionData, cursorPos } = useGetSelectedText(ref);

  const discoveredTwiceToolHandler = useCallback(
    (regExpData: IEditorTwiceRegExp, key: keyof IEditorToolsList) => {
      const regExp = convertTwiceRegExpData(regExpData);

      if (selectionData.text.length > 0) {
        if (selectionData.text.match(regExp)) {
          setActiveTool(key);
        }
      } else {
        if (
          isCursorBetweenStrings(
            ref.current?.value ?? "",
            regExpData.open,
            regExpData.close,
            cursorPos
          )
        ) {
          setActiveTool(key);
        }
      }
    },
    [selectionData, setActiveTool, cursorPos, ref]
  );

  useEffect(() => {
    setToolsStateList(defaultEditorToolsList);
    discoveredTwiceToolHandler({ open: "{-b}", close: "{--b}" }, "bold");
  }, [discoveredTwiceToolHandler, setToolsStateList]);
};
