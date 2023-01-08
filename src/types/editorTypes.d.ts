export interface ISelectionData {
  start: number;
  end: number;
  text: string;
}

export const defaultSelectionData: ISelectionData = {
  start: 0,
  end: 0,
  text: "",
};

export interface IEditorToolsList {
  bold: boolean;
}

export const defaultEditorToolsList: IEditorToolsList = {
  bold: false,
};

export interface IEditorTwiceRegExp {
  open: string;
  close: string;
}
