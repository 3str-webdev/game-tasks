import { FC } from "react";

import { IEditorToolProps } from "./EditorTool.props";

import "./EditorTool.scss";

const EditorTool: FC<IEditorToolProps> = ({
  isActive,
  className,
  children,
  ...props
}) => {
  return (
    <label
      className={`editorTool ${className ? className : ""}${
        isActive ? " active" : ""
      }`}
      {...props}
    >
      {children}
    </label>
  );
};

export default EditorTool;
