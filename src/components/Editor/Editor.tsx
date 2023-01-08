import { FC, useState, useRef, useEffect, memo } from "react";
import { useEditorToolsList } from "../../hooks/useEditorToolsList";

import { IEditorProps } from "./Editor.props";

import "./Editor.scss";
import EditorTool from "./EditorTool/EditorTool";

const Editor: FC<IEditorProps> = ({ title, value, className, ...props }) => {
  const [activeTextTab, setActiveTextTab] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { toolsStateList, toggleToolState } = useEditorToolsList(textareaRef);

  // useEffect(() => console.log(toolsStateList), [toolsStateList]);

  return (
    <div className={`Editor ${className}`}>
      <input type={"radio"} name="tabs" id="textTab" defaultChecked hidden />
      <input type={"radio"} name="tabs" id="previewTab" hidden />
      <div className="editorTitle">{title}</div>
      <div className="editorTabs">
        <label
          className={`tab${activeTextTab ? " active" : ""}`}
          htmlFor="textTab"
          onClick={() => {
            setActiveTextTab(true);
          }}
        >
          Текст
        </label>
        <label
          className={`tab${!activeTextTab ? " active" : ""}`}
          htmlFor="previewTab"
          onClick={() => {
            setActiveTextTab(false);
          }}
        >
          Просмотр
        </label>
      </div>
      <div className="editorContent">
        <div className="editorTextWrapper">
          <div className="editorTools">
            <ul>
              <li>
                <EditorTool
                  onClick={() => {
                    toggleToolState("bold");
                  }}
                  isActive={toolsStateList.bold}
                >
                  B
                </EditorTool>
              </li>
            </ul>
          </div>
          <div className="editorFields">
            <textarea
              ref={textareaRef}
              className="editorText"
              value={value}
              {...props}
            />
            <div className="editorPreview"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Editor);
