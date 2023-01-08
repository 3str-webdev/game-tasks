import { useState, RefObject, useCallback } from "react";
import {
  defaultEditorToolsList,
  IEditorToolsList,
} from "../types/editorTypes.d";
import { useAnalitic } from "./useTextAnalitic";

export const useEditorToolsList = (ref: RefObject<HTMLTextAreaElement>) => {
  const [toolsStateList, setToolsStateList] = useState<IEditorToolsList>(
    defaultEditorToolsList
  );

  const toggleToolState = useCallback((tool: keyof IEditorToolsList) => {
    setToolsStateList((prev) => ({
      ...prev,
      [tool]: !prev[tool],
    }));
  }, []);

  const setActiveTool = useCallback((tool: keyof IEditorToolsList) => {
    setToolsStateList((prev) => ({
      ...prev,
      [tool]: true,
    }));
  }, []);

  const setInActiveTool = useCallback((tool: keyof IEditorToolsList) => {
    setToolsStateList((prev) => ({
      ...prev,
      [tool]: false,
    }));
  }, []);

  useAnalitic(
    ref,
    setActiveTool,
    setToolsStateList,
  );

  return {
    toolsStateList,
    toggleToolState,
    setActiveTool,
    setInActiveTool,
    setToolsStateList,
  };
};
