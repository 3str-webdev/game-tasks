import { IEditorTwiceRegExp } from "../../types/editorTypes";

export const convertTwiceRegExpData = (
  regExpData: IEditorTwiceRegExp
): RegExp => {
  const content = /(\w|\W)+/;
  return new RegExp(`${regExpData.open}${content.source}${regExpData.close}`);
};
